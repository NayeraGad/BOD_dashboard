import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";
import postsReducer from "./features/posts/postsSlice";
import todosReducer from "./features/todos/todosSlice";
import paginationReducer from "./features/paginationSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    todos: todosReducer,
    pagination: paginationReducer,
  },
});
