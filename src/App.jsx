import { QueryProvider } from "./Context/QueryContext";
import Dashboard from "./Pages/Dashboard";
import "./styles/app.css";

function App() {
  return (
    <QueryProvider>
      <div className="bg-gray-500 min-h-screen flex items-center justify-center">
        <Dashboard />
      </div>
    </QueryProvider>
  );
}

export default App;
