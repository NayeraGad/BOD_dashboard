/**
 * Custom hook for searching and filtering items based on a query and specified keys.
 * 
 * @param {Array} items - The array of items to filter.
 * @param {Array<string|function>} searchKeys - Keys or accessor functions to search within each item.
 * @param {string} slice - Identifier for the slice of data, used for pagination.
 * @returns {{
 *   query: string,
 *   setQuery: function,
 *   filteredItems: Array
 * }} An object containing the current query, a setter for the query, and the filtered items.
 *
 * @example
 * const { query, setQuery, filteredItems } = useSearch(data, ['name', 'email'], 'users');
 */

import { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../lib/features";
import { useDebounce } from "./useDebounce";

export const useSearch = (items, searchKeys = [], slice) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // Debounced query prevents filtering on every keystroke
  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    dispatch(setPage({ slice, page: 1 }));
  }, [debouncedQuery, dispatch, slice]);

  const filteredItems = useMemo(() => {
    if (!debouncedQuery) return items;

    return items.filter((item) =>
      searchKeys.some((key) => {
        const value = typeof key === "function" ? key(item) : item[key];

        return value
          ?.toString()
          .toLowerCase()
          .includes(debouncedQuery.toLowerCase());
      })
    );
  }, [items, debouncedQuery, searchKeys]);

  return { query, setQuery, filteredItems };
};
