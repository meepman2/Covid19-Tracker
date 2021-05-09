import React, { useState, useEffect } from "react";

function SearchBar(props) {
    const [countryArray, setCountryArray] = useState([]);

    useEffect(() => {
        fetch("https://covid19.mathdro.id/api/countries")
            .then((results) => results.json())
            .then((data) => {
                setCountryArray(data.countries.map((country) => country.name));
                setCountryArray((prevValues) => ["Global", ...prevValues]);
            });
    }, []);

    return (
        <div className="searchBar">
            <select onChange={(event) => props.select(event.target.value)}>
                {countryArray.map((country, index) => {
                    return (
                        <option key={index} value={country} id={index}>
                            {country}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
export default SearchBar;
