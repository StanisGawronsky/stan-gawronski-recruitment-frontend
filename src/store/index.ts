import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "redux/slices/todoSlice";
import modeSlice from "redux/slices/modeSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    mode: modeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
