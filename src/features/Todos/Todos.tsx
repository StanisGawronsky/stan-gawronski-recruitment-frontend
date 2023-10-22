import { Form } from "./Form";
import { List } from "./List";
import { useForm } from "./Form/Form.hook";
import { ListFallback } from "components/ListFallback";
import { selectTodos } from "redux/slices/todoSlice";
import { useAppSelector } from "store/hooks";

interface TodosProps {
  darkMode: boolean;
}

export const Todos = ({ darkMode }: TodosProps) => {
  const todos = useAppSelector(selectTodos);
  const formProps = useForm();

  return (
    <>
      <Form {...formProps} darkMode={darkMode} />
      {todos?.length ? (
        <List darkMode={darkMode} todos={todos} />
      ) : (
        <ListFallback
          darkMode={darkMode}
          fallbackText="You have no task assigned"
        />
      )}
    </>
  );
};
