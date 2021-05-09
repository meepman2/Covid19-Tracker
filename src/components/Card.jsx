import React, { useState, useEffect } from "react";
import CardList from "./CardList";

function Card(props) {
    const [dataArray, setDataArray] = useState([]);
    const [updateDate, setUpdateDate] = useState("");

    useEffect(() => {
        fetch("https://covid19.mathdro.id/api/" + props.location)
            .then((results) => results.json())
            .then((data) => {
                const {
                    confirmed: { value: conData },
                    recovered: { value: recData },
                    deaths: { value: detData },
                    lastUpdate: update,
                } = data;

                setDataArray([
                    { name: "INFECTED", amount: conData },
                    { name: "RECOVERED", amount: recData },
                    { name: "DEATHS", amount: detData },
                ]);
                const currentDate = new Date(update);
                setUpdateDate(currentDate.toDateString());
            });
    }, [props.location]);

    return (
        <div>
            <div className="cardArray">
                {dataArray.map((item, index) => (
                    <CardList key={index} id={index} container={item} date={updateDate} />
                ))}
            </div>
        </div>
    );
}

export default Card;
