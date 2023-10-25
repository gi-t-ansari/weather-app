import { useState } from "react";
import SearchBar from "./SearchBar";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  const [city, setCity] = useState("");

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <Weather city={city} />
    </div>
  );
}
