import EntityPage from "../../components/common/EntityPage";
import { todosSearchField, todosTable } from "../../constants";
import { deleteTodo, getAllTodos } from "../../lib/features";

const TodosPage = () => {
  return (
    <EntityPage
      slice="todos"
      columns={todosTable}
      searchFields={todosSearchField}
      thunk={{
        get: { fn: getAllTodos, name: "getAllTodos" },
        delete: { fn: deleteTodo, name: "deleteTodo" },
      }}
    />
  );
};

export default TodosPage;
