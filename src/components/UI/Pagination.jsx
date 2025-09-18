import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../lib/features/paginationSlice";
import React, { useContext } from "react";
import { SidebarContext } from "../../context/Sidebar/SidebarContext";
import { getVisiblePages } from "../../utilities";

const Pagination = ({ slice, totalRows }) => {
  const dispatch = useDispatch();
  const { page, limit } = useSelector((state) => state.pagination[slice]);
  const { isDesktop } = useContext(SidebarContext);

  const totalPages = Math.ceil(totalRows / limit);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setPage({ slice, page: newPage }));
    }
  };

  if (totalPages <= 1) return null;

  const visiblePages = getVisiblePages(page, totalPages);

  return (
    <div className="flex justify-center items-center gap-2 mt-4 mb-6">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {isDesktop ? (
        visiblePages.map((p, i, arr) => {
          if (i > 0 && p !== arr[i - 1] + 1) {
            return (
              <React.Fragment key={p}>
                <span className="px-2">…</span>
                <button
                  onClick={() => handlePageChange(p)}
                  className={`px-3 py-1 border rounded ${
                    page === p ? "bg-primary text-white" : ""
                  }`}
                >
                  {p}
                </button>
              </React.Fragment>
            );
          }
          return (
            <button
              key={p}
              onClick={() => handlePageChange(p)}
              className={`px-3 py-1 border rounded ${
                page === p ? "bg-primary text-white" : ""
              }`}
            >
              {p}
            </button>
          );
        })
      ) : (
        <p>
          <span className="text-primary font-bold">{page}</span> from{" "}
          {totalPages}
        </p>
      )}

      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
