import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    users: { page: 1, limit: 10 },
    posts: { page: 1, limit: 15 },
    todos: { page: 1, limit: 15 },
  },
  reducers: {
    setPage: (state, action) => {
      const { slice, page } = action.payload;
      if (state[slice]) state[slice].page = page;
    },
    setLimit: (state, action) => {
      const { slice, limit } = action.payload;
      state[slice].limit = limit;
    },
  },
});

export const { setPage, setLimit } = paginationSlice.actions;

export default paginationSlice.reducer;
