import clsx from "clsx";
import styles from "./Form.styles.module.scss";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { TextField } from "@radix-ui/themes";
import { Button } from "components";

type Task = { task: string };

interface FormProps {
  darkMode: boolean;
  onSubmit: SubmitHandler<Task>;
  handleSubmit: UseFormHandleSubmit<Task>;
  register: UseFormRegister<Task>;
  errors: FieldErrors<Task>;
}

export const Form = ({
  darkMode,
  errors,
  handleSubmit,
  onSubmit,
  register,
}: FormProps) => {
  return (
    <form
      className={clsx(styles.form, darkMode && styles.formDarkMode)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className={styles.label} htmlFor="task">
          Create a task
        </label>
        <div className={styles.innerContainer}>
          <TextField.Root size={"3"} className={styles.inputRoot}>
            <TextField.Input
              className={styles.input}
              size={"3"}
              id="task"
              type="text"
              placeholder="ex. study canvas for 30 min"
              {...register("task")}
            />
          </TextField.Root>

          <Button className={styles.button} type="submit">
            Add
          </Button>
        </div>
        <p className={clsx(styles.errors, darkMode && styles.errorsDarkMode)}>
          {errors.task?.message}
        </p>
      </div>
    </form>
  );
};
