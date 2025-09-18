import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createDeleteReducers, createExtraReducers, createUpdateReducers } from "../../utils";
import { baseState } from "../../../constants";

export const getAllTodos = createAsyncThunk("/todos/getAllTodos", async () => {
  let completedCount = 0,
    pendingCount = 0;
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  data.forEach((item) => (item.completed ? completedCount++ : pendingCount++));

  return { items: data, completedCount, pendingCount };
});

export const getTodo = createAsyncThunk("/todos/editTodo", async (id) => {
  const { data: item } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  const { data: user } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${item.userId}`
  );

  return { ...item, user: user.name };
});

export const updateTodo = createAsyncThunk(
  "/todos/updateTodo",
  async (todo) => {
    const { id, ...body } = todo;
    const { data } = await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      body
    );
    return data;
  }
);

export const deleteTodo = createAsyncThunk("/todos/deleteTodo", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return id;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    ...baseState,
    completedCount: 0,
    pendingCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    createExtraReducers({
      builder,
      asyncThunk: getAllTodos,
      key: "getAllTodos",
      fulfilledFn: (state, action) => {
        state.items = action.payload.items;
        state.completedCount = action.payload.completedCount;
        state.pendingCount = action.payload.pendingCount;
      },
    });

    createExtraReducers({
      builder,
      asyncThunk: getTodo,
      key: "getTodo",
      fulfilledFn: (state, action) => (state.item = action.payload),
    });

    createUpdateReducers({
      builder,
      asyncThunk: updateTodo,
      key: "updateTodo",
    });

    createDeleteReducers({
      builder,
      asyncThunk: deleteTodo,
      key: "deleteTodo",
    });
  },
});

export default todosSlice.reducer;
