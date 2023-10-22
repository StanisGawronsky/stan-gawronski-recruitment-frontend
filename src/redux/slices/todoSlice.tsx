import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";
import { RootState } from "store";

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

const initialState: { todos: Todo[] } = {
  todos: [],
};

const createNewTodo = (title: string) => {
  return {
    id: uniqueId(),
    title,
    done: false,
  };
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.todos.unshift(createNewTodo(action.payload));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleDone: (state, action: PayloadAction<string>) => {
      const [element] = state.todos.filter(
        (todo) => todo.id === action.payload
      );
      element.done = !element.done;
    },
    sortItem: (state, action: PayloadAction<Omit<Todo, "title">>) => {
      const { done, id } = action.payload;

      const targetToEnd = (_: Todo, b: Todo) => (b.id === id ? -1 : 0);
      const targetToStart = (a: Todo) => (a.id === id ? -1 : 0);

      state.todos.sort(done ? targetToEnd : targetToStart);
    },
    manageTodoItem: (state, action: PayloadAction<Omit<Todo, "title">>) => {
      const { toggleDone, sortItem } = todoSlice.caseReducers;
      const id = action.payload.id;

      toggleDone(state, { ...action, payload: id });
      sortItem(state, action);
    },
  },
});

export const selectTodos = (state: RootState) => state.todos.todos;
export const { addItem, removeItem, manageTodoItem } = todoSlice.actions;

export default todoSlice.reducer;
