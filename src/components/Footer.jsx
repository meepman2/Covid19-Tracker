import React from "react";

function Footer() {
    var year = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright Varun Sachdeva {year}</p>
            <a href="https://covid19.mathdro.id/api">Data API</a>
        </footer>
    );
}

export default Footer;
