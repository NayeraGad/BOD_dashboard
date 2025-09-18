import { useSelector } from "react-redux";
import { useAddUserData } from "./useAddUserData";

export const useDashboardStatus = () => {
  const {
    isLoading: postsLoading,
    isError: postsError,
    error: postsErr,
  } = useSelector((s) => s.posts);
  const {
    isLoading: todosLoading,
    isError: todosError,
    error: todosErr,
  } = useSelector((s) => s.todos);
  const { isUsersLoading, isUsersError, usersError } = useAddUserData([]);

  const isLoading =
    isUsersLoading || postsLoading.getAllPosts || todosLoading.getAllTodos;

  const isError =
    isUsersError || postsError.getAllPosts || todosError.getAllTodos;

  const errors = [
    usersError,
    postsErr.getAllPosts,
    todosErr.getAllTodos,
  ].filter(Boolean);

  return { isLoading, isError, errors };
};
