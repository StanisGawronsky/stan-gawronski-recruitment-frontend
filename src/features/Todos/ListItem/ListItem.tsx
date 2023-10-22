import { useCallback } from "react";
import { Checkbox, Button } from "components";
import { manageTodoItem, removeItem } from "redux/slices/todoSlice";
import { useAppDispatch } from "store/hooks";

interface Props {
  id: string;
  done: boolean;
  title: string;
  className?: string;
}

export const ListItem = ({ id, title, className }: Props) => {
  const dispatch = useAppDispatch();

  const handleItemChecked = useCallback(
    (id: string) => (done: boolean) => {
      dispatch(manageTodoItem({ done, id }));
    },
    [dispatch]
  );

  const handleRemoveItem = useCallback(
    (id: string) => () => {
      dispatch(removeItem(id));
    },
    [dispatch]
  );

  return (
    <div className={className}>
      <Checkbox onChange={handleItemChecked(id)} />
      <p>{title}</p>
      <Button onClick={handleRemoveItem(id)}>delete</Button>
    </div>
  );
};
