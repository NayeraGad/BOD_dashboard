import { useParams } from "react-router-dom";
import { FormPage } from "../../components";
import { postFormFields } from "../../constants";
import { getPost, updatePost } from "../../lib/features";

const EditPostPage = () => {
  const { id } = useParams();

  return (
    <FormPage
      id={id}
      thunk={{
        get: { fn: getPost, key: "getPost" },
        update: { fn: updatePost, key: "updatePost" },
      }}
      slice="posts"
      fields={postFormFields}
    />
  );
};

export default EditPostPage;
