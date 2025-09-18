export const createUpdateReducers = ({
  builder,
  asyncThunk,
  key,
}) => {
  builder.addCase(asyncThunk.pending, (state) => {
    state.isLoading[key] = true;
    state.isError[key] = false;
    state.error[key] = null;
  });

  builder.addCase(asyncThunk.fulfilled, (state, action) => {
    state.isLoading[key] = false;
    // Find and replace the existing item
    const index = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    if (index !== -1) {
      state.items[index] = action.payload;
    }
    // Replace single item if currently loaded
    if (state.item?.id === action.payload.id) {
      state.item = action.payload;
    }
  });

  builder.addCase(asyncThunk.rejected, (state, action) => {
    state.isLoading[key] = false;
    state.isError[key] = true;
    state.error[key] = action.payload || action.error.message;
  });
};
