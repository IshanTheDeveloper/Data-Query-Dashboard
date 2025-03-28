import { createContext, useState, useContext } from "react";

const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Simulate API Call for Query Processing
  const processQuery = async (query) => {
    setLoading(true);
    setError("");

    try {
      setTimeout(() => {
        const mockData = {
          query,
          results: [
            { name: "Sales", value: Math.floor(Math.random() * 1000) },
            { name: "Marketing", value: Math.floor(Math.random() * 1000) },
            { name: "Operations", value: Math.floor(Math.random() * 1000) },
          ],
        };
        setResults(mockData);
        setHistory((prev) => [query, ...prev]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError("Failed to process query!");
      setLoading(false);
    }
  };

  return (
    <QueryContext.Provider
      value={{
        query,
        setQuery,
        history,
        results,
        loading,
        error,
        processQuery,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export const useQueryContext = () => useContext(QueryContext);
