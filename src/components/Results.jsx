import { useQueryContext } from "../Context/QueryContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Loader from "./Loader";

const Results = () => {
  const { results, loading, error } = useQueryContext();

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!results) return <p className="text-gray-500">No data to display.</p>;

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-4">Query Results for: {results.query}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={results.results}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3182CE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Results;
