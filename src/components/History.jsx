import { useQueryContext } from "../Context/QueryContext";

const History = () => {
  const { history } = useQueryContext();

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Query History</h3>
      <ul className="list-disc ml-4 text-gray-600">
        {history.length > 0 ? (
          history.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No queries yet.</p>
        )}
      </ul>
    </div>
  );
};

export default History;
