import { DeleteButton, EditButton } from "./TableActions";

const Table = ({
  columns,
  rows,
  notDashboard = true,
  slice,
  query,
  setQuery,
  deleteThunk,
}) => {
  return (
    <>
      <h2 className="mt-5 text-2xl text-primary font-bold capitalize">
        {!notDashboard && !slice ? "Latest Posts" : slice}
      </h2>

      <div className="data-table">
        {notDashboard && (
          <input
            type="text"
            value={query}
            aria-label={`Search ${slice}`}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-1/3 mb-4 p-2 rounded-md bg-light-bg text-black"
            placeholder={`Search ${slice}...`}
          />
        )}

        <table>
          <thead>
            <tr>
              {columns.map(({ field, label }) => (
                <th
                  scope="col"
                  key={field}
                  className="text-accent dark:text-accent-dark text-lg"
                >
                  {label}
                </th>
              ))}
              {notDashboard && (
                <th
                  scope="col"
                  className="text-accent dark:text-accent-dark text-lg"
                >
                  Actions
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {rows.length ? (
              rows.map((row) => (
                <tr
                  key={row.id}
                  className="odd:bg-light-bg dark:odd:bg-gray-light"
                >
                  {columns.map(({ field, render }) => (
                    <td className="truncate" key={field}>
                      {render?.(row) ?? row[field]}
                    </td>
                  ))}
                  {notDashboard && (
                    <td className="flex gap-2">
                      <EditButton slice={slice} id={row.id} />
                      <DeleteButton thunk={deleteThunk} id={row.id} />
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="py-7 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
