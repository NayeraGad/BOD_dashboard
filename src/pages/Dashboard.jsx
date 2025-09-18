import { useDispatch, useSelector } from "react-redux";
import { Cards, ErrorMessage, Loader, Table } from "../components";
import { postsTable } from "../constants";
import { useEffect } from "react";
import { getAllPosts, getAllTodos, getAllUsers } from "../lib/features";
import { useAddUserData, useDashboardStatus } from "../hooks";
import TodosPieChart from "../components/UI/TodosPieChart";
import TodosBarChart from "../components/UI/TodosBarChart";
import { getTotal } from "../utilities";
import TodosCharts from "../components/UI/TodosCharts";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { items: users, count: usersCount } = useSelector(
    (state) => state.users
  );
  const { items: posts, count: postsCount } = useSelector(
    (state) => state.posts
  );
  const {
    items: todos,
    completedCount,
    pendingCount,
  } = useSelector((state) => state.todos);
  const { isLoading, isError, errors } = useDashboardStatus();

  const { result } = useAddUserData(posts);
  const latestPosts = result
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  const userTodoData = getTotal(todos, users);

  const count = { usersCount, postsCount, completedCount, pendingCount };

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts());
    dispatch(getAllTodos());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <div className="section-container overflow-hidden pb-3">
      {isError ? (
        <ErrorMessage errors={errors} />
      ) : (
        <>
          <Cards count={count} />

          <TodosCharts
            completedCount={completedCount}
            pendingCount={pendingCount}
            userTodoData={userTodoData}
          />

          <Table
            columns={postsTable}
            rows={latestPosts}
            notDashboard={false}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;