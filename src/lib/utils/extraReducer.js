/**
 * Adds extra reducers for handling async thunks to a Redux builder.
 *
 * @param {Object} params - The parameters object.
 * @param {Object} params.builder - The Redux builder object to add cases to.
 * @param {Object} params.asyncThunk - The async thunk action creator.
 * @param {string} params.key - The key used to track loading and error state.
 * @param {Function} [params.fulfilledFn] - Optional custom function to handle the fulfilled case.
 *
 * @returns {void}
 */
export const createExtraReducers = ({
  builder,
  asyncThunk,
  key,
  fulfilledFn,
}) => {
  builder.addCase(asyncThunk.pending, (state) => {
    state.isLoading[key] = true;
  });
  builder.addCase(asyncThunk.fulfilled, (state, action) => {
    state.isLoading[key] = false;
    if (fulfilledFn) {
      fulfilledFn(state, action);
    } else {
      state.items = action.payload.items;
      state.count = action.payload.count;
    }
  });
  builder.addCase(asyncThunk.rejected, (state, action) => {
    state.isLoading[key] = false;
    state.isError[key] = true;
    state.error[key] = action.payload || action.error.message;
  });
};
