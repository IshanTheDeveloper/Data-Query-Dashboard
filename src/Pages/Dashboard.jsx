import History from "../components/History";
import Results from "../components/Results";
import QueryInput from "../components/QueryInput";

const Dashboard = () => {
  return (
    <div className="w-[30vw] mx-auto p-6 bg-white shadow-2xl rounded-xl">
      <h1 className="text-3xl font-bold mb-10 text-center text-blue-600">
        Data Query Dashboard
      </h1>
      <QueryInput />
      <Results />
      <History />
    </div>
  );
};

export default Dashboard;
