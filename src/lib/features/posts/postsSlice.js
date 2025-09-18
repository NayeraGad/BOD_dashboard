import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fakeTimestamp } from "../../../utilities";
import {
  createDeleteReducers,
  createExtraReducers,
  createUpdateReducers,
} from "../../utils";
import { baseState } from "../../../constants";

export const getAllPosts = createAsyncThunk("/posts/getAllPosts", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const items = fakeTimestamp(data);

  return { items, count: items.length };
});

export const getPost = createAsyncThunk("/posts/editPost", async (id) => {
  const { data: item } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const { data: user } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${item.userId}`
  );

  return { ...item, user: user.name };
});

export const updatePost = createAsyncThunk(
  "/posts/updatePost",
  async (post) => {
    const { id, ...body } = post;
    const { data } = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      body
    );
    return data;
  }
);

export const deletePost = createAsyncThunk("/posts/deletePost", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return id;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    ...baseState,
  },
  reducers: {},
  extraReducers: (builder) => {
    createExtraReducers({
      builder,
      asyncThunk: getAllPosts,
      key: "getAllPosts",
    });

    createExtraReducers({
      builder,
      asyncThunk: getPost,
      key: "getPost",
      fulfilledFn: (state, action) => (state.item = action.payload),
    });

    createUpdateReducers({
      builder,
      asyncThunk: updatePost,
      key: "updatePost",
    });

    createDeleteReducers({
      builder,
      asyncThunk: deletePost,
      key: "deletePost",
    });
  },
});

export default postsSlice.reducer;
