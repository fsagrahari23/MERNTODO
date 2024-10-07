import todos from "./Todo/TodoSlice";
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
  reducer: {
    todos,
  },
})