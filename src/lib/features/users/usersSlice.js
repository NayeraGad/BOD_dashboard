import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createDeleteReducers, createExtraReducers, createUpdateReducers } from "../../utils";
import { baseState } from "../../../constants";

export const getAllUsers = createAsyncThunk("/users/getAllUsers", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return { items: data, count: data.length };
});

export const getUser = createAsyncThunk("/users/editUser", async (id) => {
  const { data: item } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return item;
});

export const updateUser = createAsyncThunk(
  "/users/updateUser",
  async (user) => {
    const { id, ...body } = user;
    const { data } = await axios.patch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      body
    );
    return data;
  }
);

export const deleteUser = createAsyncThunk("/users/deleteUser", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  return id;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    ...baseState,
  },
  reducers: {},
  extraReducers: (builder) => {
    createExtraReducers({
      builder,
      asyncThunk: getAllUsers,
      key: "getAllUsers",
    });

    createExtraReducers({
      builder,
      asyncThunk: getUser,
      key: "getUser",
      fulfilledFn: (state, action) => (state.item = action.payload),
    });

    createUpdateReducers({
      builder,
      asyncThunk: updateUser,
      key: "updateUser",
    });

    createDeleteReducers({
      builder,
      asyncThunk: deleteUser,
      key: "deleteUser",
    });
  },
});

export default usersSlice.reducer;
