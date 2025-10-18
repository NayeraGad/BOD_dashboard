import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdEdit, MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

export const EditButton = ({ slice, id }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/${slice}/edit/${id}`)}
      className="p-2 rounded-md text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900"
      aria-label={`Edit ${slice} ${id}`}
    >
      <MdEdit className="text-xl" />
    </button>
  );
};

export const DeleteButton = ({ thunk, id }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await dispatch(thunk(id)).unwrap();
      toast.success("Item deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete item. Please try again.");
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="p-2 rounded-md text-red-600 hover:bg-red-100 dark:hover:bg-red-900"
      aria-label={`Delete item ${id}`}
    >
      <MdDelete className="text-xl" />
    </button>
  );
};
