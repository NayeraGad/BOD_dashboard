/**
 * Creates reducers for handling delete operations with async thunks.
 *
 * @param {Object} params - The parameters object.
 * @param {Object} params.builder - The Redux builder object to add cases to.
 * @param {Function} params.asyncThunk - The async thunk for the delete operation.
 * @param {string} params.key - The key used to track loading and error state.
 * @param {string} [params.singleKey] - Optional key for a single item to clear if deleted.
 *
 * @example
 * createDeleteReducers({
 *   builder,
 *   asyncThunk: deleteItemThunk,
 *   key: 'deleteItem',
 *   singleKey: 'selectedItem'
 * });
 */
export const createDeleteReducers = ({
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

    // Remove from array
    state.items = state.items.filter((item) => item.id !== action.payload);

    // Clear single item if it was the deleted one
    if (state.item?.id === action.payload) {
      state.item = null;
    }
  });

  builder.addCase(asyncThunk.rejected, (state, action) => {
    state.isLoading[key] = false;
    state.isError[key] = true;
    state.error[key] = action.payload || action.error.message;
  });
};
