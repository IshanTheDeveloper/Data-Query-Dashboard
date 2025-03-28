import { useQueryContext } from "../Context/QueryContext";

function QueryInput() {
  const { query, setQuery, processQuery } = useQueryContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      processQuery(query);
    } else {
      alert("Please enter a valid query.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a business question..."
        className="w-full p-2 border border-gray-300 rounded-md outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}

export default QueryInput;
