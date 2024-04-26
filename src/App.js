// App.js

import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import SearchForm from "./SearchForm";
import DataGrid from "./DataGrid";
import RocketGrid from "./RocketGrid";
import axios from "axios";
import "./App.css";

function App() {
  const [searchFilters, setSearchFilters] = useState({
    status: "",
    original_launch: "",
    type: "",
  });
  const [data, setData] = useState([]);

  const [rocketData, setRocketData] = useState([]);

  useEffect(() => {
    const fetchRocketData = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v4/rockets"
        );
        setRocketData(response.data);
      } catch (error) {
        console.error("Error fetching rocket data:", error);
      }
    };

    fetchRocketData();
  }, []);

  // Function to fetch data from the API based on search filters
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.spacexdata.com/v4/capsules"
      );
      // Make API request to fetch rockets data
      // Update state with fetched rockets data
      setData(response.data);
    } catch (error) {
      console.error("Error fetching capsules:", error);
    }
  };

  return (
    <div className="App">
      <Banner />
      <RocketGrid rocketData={rocketData} />

      <SearchForm
        searchFilters={searchFilters}
        setSearchFilters={setSearchFilters}
        fetchData={fetchData}
      />

      <DataGrid data={data} />
    </div>
  );
}

export default App;
