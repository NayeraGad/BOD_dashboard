import { useParams } from "react-router-dom";
import { FormPage } from "../../components";
import { getUser, updateUser } from "../../lib/features";
import { userFormFields } from "../../constants";

const EditUserPage = () => {
  const { id } = useParams();

  return (
    <FormPage
      id={id}
      thunk={{
        get: { fn: getUser, key: "getUser" },
        update: { fn: updateUser, key: "updateUser" },
      }}
      slice="users"
      fields={userFormFields}
    />
  );
};

export default EditUserPage;