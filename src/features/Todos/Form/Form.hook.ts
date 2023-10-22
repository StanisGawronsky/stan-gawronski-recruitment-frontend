import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm as useReactHookForm, SubmitHandler } from "react-hook-form";
import { useCallback } from "react";
import { useAppDispatch } from "store/hooks";
import { addItem } from "redux/slices/todoSlice";

export const useForm = () => {
  const dispatch = useAppDispatch();

  const validationSchema = z.object({
    task: z
      .string()
      .min(1, { message: "Task must contain at least 1 character" })
      .max(50, { message: "Task must contain at most 50 characters" })
      .regex(/^[a-zA-Z\u0080-\u024F0-9\s]+$/, {
        message: "Task can consist of letters, numbers, and non-empty spaces.",
      }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useReactHookForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = useCallback(
    ({ task }) => {
      resetField("task");
      dispatch(addItem(task));
    },
    [dispatch, resetField]
  );

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};
