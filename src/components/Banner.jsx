import React from "react";

function Banner(props) {
    var strCountry = "";
    props.country ? (strCountry = props.country.substr(10)) : (strCountry = "Global");

    return (
        <div className="banner">
            <h1>{strCountry.toUpperCase()}</h1>
        </div>
    );
}

export default Banner;
