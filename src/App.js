import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import RetreatCard from "./components/RetreatCard";
import Filter from "./components/Filter";
import { fetchRetreats, optionRetracts } from "./api";
import "./index.css";

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRetreats = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchRetreats(page, 3, filters);
        setRetreats(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Failed to load retreats");
      }
      setLoading(false);
    };
    loadRetreats();
  }, [page, filters]);

  const handleFilterChange = async (key, value) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    console.log(updatedFilters);
    setPage(1); // Reset to the first page when filters change

    setLoading(true);
    setError(null);
    try {
      const data = await optionRetracts(updatedFilters);
      setRetreats(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Failed to load retreats");
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <Hero />
      <div className="p-4">
        <div className="block sm:flex justify-between mb-4">
          <Filter onFilterChange={handleFilterChange} />
          <input
            type="text"
            placeholder="Search retreats by title"
            onChange={(e) => handleFilterChange("search", e.target.value)}
            className=" p-2 bg-[#efefef] sm:bg-[#1b3252] border sm:border-none sm:text-white sm:placeholder-white text-[12px] rounded-md h-[30px] w-full sm:w-[200px]"
          />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {retreats.map((retreat) => (
              <RetreatCard key={retreat.id} {...retreat} />
            ))}
          </div>
        )}
        <div className="flex justify-center gap-2 mt-4 pb-10 sm:pb-0">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="p-1 bg-[#1b3252] text-white font-semibold text-[12px] rounded-2xl sm:rounded-md  h-[30px] w-20 sm:w-[80px]"
          >
            Previous
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="p-1 bg-[#1b3252] text-white font-semibold text-[12px] rounded-2xl sm:rounded-md h-[30px] w-14  sm:w-[80px]"
          >
            Next
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 z-0 sm:relative w-full bg-white ">
          <p className=" text-center text-[12px] pt-4 pb-3">©2024 Wellness Retreats. All rights reserved.</p>
        </div>
    </div>
  );
};

export default App;

// import Main from './components/main';

// function App() {
//   return (
//     <div>
//       <Header/>
//       <Hero/>
//       <Main/>
//     </div>
//   );
// }

// export default App;
