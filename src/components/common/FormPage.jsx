import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../UI/Loader";
import ErrorMessage from "../UI/ErrorMessage";
import Form from "../UI/Form";
import toast from "react-hot-toast";

const FormPage = ({ id, thunk, slice, fields }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { item, isLoading, isError, error } = useSelector(
    (state) => state[slice]
  );

  useEffect(() => {
    dispatch(thunk.get.fn(id));
  }, [dispatch, id, thunk.get]);

  const handleSubmit = async (values) => {
    try {
      await dispatch(thunk.update.fn({ id, ...values })).unwrap();
      toast.success(`${slice.slice(0, -1)} updated successfully!`);
      navigate(`/${slice}`);
    } catch (err) {
      toast.error("Update failed. Please try again.");
    }
  };

  if (isLoading[thunk.get.key]) return <Loader />;

  if (!item) return null;

  return (
    <section className="section-container">
      {isError[thunk.get.key] ? (
        <ErrorMessage errors={[error[thunk.get.key]]} />
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Edit {slice}</h2>
          <Form
            fields={fields(item)}
            onSubmit={handleSubmit}
            submitLabel="Save"
          />
        </>
      )}
    </section>
  );
};

export default FormPage;
