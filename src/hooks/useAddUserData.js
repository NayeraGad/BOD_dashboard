/**
 * Custom hook to enrich data items with user information.
 *
 * - If `slice === "users"`: returns the users slice items directly.
 * - Otherwise: maps through provided `data` and attaches a `user` field
 *   resolved from the users slice (fallback to "Unknown" if not found).
 *
 * @param {Array} data - Array of entities (e.g., posts or todos).
 * @param {string} slice - The slice name ("users", "posts", "todos", ...).
 *
 * @returns {{
 *   result: Array<Object>,
 *   isUsersLoading: boolean,
 *   isUsersError: boolean,
 *   usersError: string | null
 * }}
 *
 */
import { useSelector } from "react-redux";

export const useAddUserData = (data, slice) => {
  const { items, isLoading, isError, error } = useSelector(
    (state) => state.users
  );
  const isUsersLoading = isLoading.getAllUsers;
  const isUsersError = isError.getAllUsers;
  const usersError = error.getAllUsers;

  const result =
    slice === "users"
      ? items
      : (data ?? []).map((item) => {
          const user = items.find((user) => user.id === item.userId);
          return {
            ...item,
            user: user ? user.name : "Unknown",
          };
        });

  return { result, isUsersLoading, isUsersError, usersError };
};
