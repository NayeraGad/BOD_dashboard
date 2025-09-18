/**
 * Selector to paginate data based on the current pagination state for a given slice.
 *
 * @param {Object} state - The Redux state object.
 * @param {string} slice - The key representing the slice of data to paginate.
 * @param {Array} items - The array of items to paginate.
 * @returns {{ page: number, paginatedItems: Array, totalPages: number }} 
 *   An object containing the current page, the paginated items, and the total number of pages.
 */
import { createSelector } from "@reduxjs/toolkit";

const selectPagination = (state) => state.pagination;

export const selectPaginatedData = createSelector(
  [selectPagination, (state, slice) => slice, (state, slice, items) => items],

  (paginationState, slice, items) => {
    const { page, limit } = paginationState[slice];
    const totalPages = Math.max(1, Math.ceil(items.length / limit));
    const currentPage = Math.min(page, totalPages);
    const start = (currentPage - 1) * limit;
    const end = start + limit;
    const paginatedItems = items.slice(start, end);

    return { page: currentPage, paginatedItems, totalPages };
  }
);
