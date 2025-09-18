import EntityPage from "../../components/common/EntityPage";
import { postsSearchField, postsTable } from "../../constants";
import { deletePost, getAllPosts } from "../../lib/features";

const PostsPage = () => {
  return (
    <EntityPage
      slice="posts"
      columns={postsTable}
      searchFields={postsSearchField}
      thunk={{
        get: { fn: getAllPosts, name: "getAllPosts" },
        delete: { fn: deletePost, name: "deletePost" },
      }}
    />
  );
};

export default PostsPage;
