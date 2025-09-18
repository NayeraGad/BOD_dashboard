import { useDispatch, useSelector } from "react-redux";
import { useAddUserData, useSearch } from "../../hooks";
import { selectPaginatedData } from "../../lib/utils/pagination";
import { useEffect } from "react";
import { getAllUsers } from "../../lib/features";
import { Table, Pagination, Loader, ErrorMessage } from "../index";

const EntityPage = ({ slice, columns, searchFields, thunk }) => {
  const dispatch = useDispatch();

  const { items, isLoading, isError, error } = useSelector(
    (state) => state[slice]
  );

  // Attach user data unless it's the users slice
  const { result, isUserLoading, isUsersError, usersError } = useAddUserData(
    items,
    slice
  );

  // Search hook (auto-resets pagination)
  const { query, setQuery, filteredItems } = useSearch(
    result,
    searchFields,
    slice
  );

  // Paginate filtered results
  const { paginatedItems } = useSelector((state) =>
    selectPaginatedData(state, slice, filteredItems)
  );

  useEffect(() => {
    if (!items.length) {
      dispatch(getAllUsers());
      if (slice !== "users") dispatch(thunk.get.fn());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, slice]);

  const isAnyLoading =
    slice === "users" ? isUserLoading : isUserLoading || isLoading[thunk.get.name];

  const isAnyError =
    slice === "users" ? isUsersError : isUsersError || isError[thunk.get.name];

  const allErrors =
    slice === "users" ? [usersError] : [usersError, error[thunk.get.name]];

  if (isAnyLoading) return <Loader />;

  return (
    <section className="section-container">
      {isAnyError ? (
        <ErrorMessage
          errors={allErrors}
        />
      ) : (
        <>
          <Table
            query={query}
            setQuery={setQuery}
            slice={slice}
            columns={columns}
            rows={paginatedItems}
            deleteThunk={thunk.delete.fn}
          />

          <Pagination slice={slice} totalRows={filteredItems.length} />
        </>
      )}
    </section>
  );
};

export default EntityPage;
