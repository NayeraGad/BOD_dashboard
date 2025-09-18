const ErrorMessage = ({ errors }) => {
  const filteredErrors = (errors || []).filter(
    (err) => err !== undefined && err !== null
  );

  if (filteredErrors.length === 0) return null;

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4">
      <strong className="font-bold">Error:</strong>
      <ul className="list-disc list-inside mt-2">
        {filteredErrors.map((err, idx) => (
          <li key={idx}>{err.toString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorMessage;
