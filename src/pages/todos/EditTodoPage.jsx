import { useParams } from "react-router-dom";
import { FormPage } from "../../components";
import { getTodo, updateTodo } from "../../lib/features";
import { todoFormFields } from "../../constants";

const EditTodoPage = () => {
  const { id } = useParams();

  return (
    <FormPage
      id={id}
      thunk={{
        get: { fn: getTodo, key: "getTodo" },
        update: { fn: updateTodo, key: "updateTodo" },
      }}
      slice="todos"
      fields={todoFormFields}
    />
  );
};

export default EditTodoPage;
