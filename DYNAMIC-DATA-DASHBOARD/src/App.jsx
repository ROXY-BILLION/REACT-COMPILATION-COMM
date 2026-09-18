import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DashboardHeader from "./components/DashboardHeader";
import StatusArea from "./components/StatusArea";
import DataList from "./components/DataList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        setError("Something went wrong.",error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <DashboardHeader />

        <StatusArea
          loading={loading}
          error={error}
          dataLength={users.length}
        />

        {!loading && !error && users.length > 0 && (
          <DataList users={users} />
        )}
      </main>
    </div>
  );
}

export default App;