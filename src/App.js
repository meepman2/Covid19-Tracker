import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/Search";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Graph from "./components/Graph";
import "./styling/styles.css";

function App() {
  const [selectedCountry, setselectedCountry] = useState("");

  const handleCountryChange = country => {
    if (country === "Global") {
      setselectedCountry("");
    } else {
      setselectedCountry("countries/" + country);
    }
  };

  return (
    <div>
      <Header />
      <Banner country={selectedCountry} />
      <SearchBar select={handleCountryChange} />
      <Card location={selectedCountry} />
      <Graph country={selectedCountry} />
      <Footer />
    </div>
  );
}

export default App;
