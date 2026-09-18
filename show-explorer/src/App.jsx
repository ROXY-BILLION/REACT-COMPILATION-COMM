import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";
import SearchBar from "./components/SearchBar";
import StatusArea from "./components/StatusArea";
import DataList from "./components/DataList";
import Footer from "./components/Footer";
import { getShows, searchShows } from "./services/api";
import "./App.css";

function App() {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadShows() {
      try {
        setLoading(true);
        setError("");

        let data;

        if (searchTerm) {
          data = await searchShows(searchTerm);
        } else {
          data = await getShows();
        }

        setShows(data);
      } catch (error) {
        setError("We couldn't load the shows. Please try again.",error);
        setShows([]);
      } finally {
        setLoading(false);
      }
    }

    loadShows();
  }, [searchTerm]);

  function handleSearch(query) {
    setSearchTerm(query);
  }

  function handleRetry() {
    setSearchTerm((current) => current);
  }

  return (
    <div className="app">
      <Navbar />

      <main>
        <PageHeader />

        <SearchBar
          onSearch={handleSearch}
          searchTerm={searchTerm}
        />

        <StatusArea
          loading={loading}
          error={error}
          dataLength={shows.length}
          onRetry={handleRetry}
        />

        {!loading && !error && shows.length > 0 && (
          <DataList shows={shows} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;