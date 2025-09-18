import EntityPage from "../../components/common/EntityPage";
import { usersSearchFields, usersTable } from "../../constants";
import { deleteUser, getAllUsers } from "../../lib/features";

const UsersPage = () => {
  return (
    <EntityPage
      slice="users"
      columns={usersTable}
      searchFields={usersSearchFields}
      thunk={{
        get: { fn: getAllUsers, name: "getAllUsers" },
        delete: { fn: deleteUser, name: "deleteUser" },
      }}
    />
  );
};

export default UsersPage;
