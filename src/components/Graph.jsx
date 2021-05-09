import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";

function Graph(props) {
    const [dailyDataArray, setDailyDataArray] = useState([]);
    const [countryDataArray, setCountryDataArray] = useState([]);
    useEffect(() => {
        fetch("https://covid19.mathdro.id/api/daily")
            .then((results) => results.json())
            .then((data) => {
                setDailyDataArray(
                    data.map(({ confirmed, recovered, deaths, reportDate: date }) => ({
                        Confirmed: confirmed,
                        Recovered: recovered,
                        Deaths: deaths,
                        updateDate: date,
                    }))
                );
            });

        fetch("https://covid19.mathdro.id/api/" + props.country)
            .then((results) => results.json())
            .then((data) => {
                const {
                    confirmed: { value: conData },
                    recovered: { value: recData },
                    deaths: { value: detData },
                    lastUpdate: update,
                } = data;

                setCountryDataArray([conData, recData, detData, update]);
            });
    }, [props.country]);

    const [infected, recovered, deaths] = countryDataArray;

    const lineChart = dailyDataArray[0] ? (
        <Line
            data={{
                labels: dailyDataArray.map(({ updateDate }) => new Date(updateDate).toLocaleDateString()),
                datasets: [
                    {
                        data: dailyDataArray.map((data) => data.Confirmed.total),
                        label: "Infected",
                        borderColor: "#3333ff",
                        fill: true,
                    },
                    {
                        data: dailyDataArray.map((data) => data.Deaths.total),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: "rgba(255, 0, 0, 0.5)",
                        fill: true,
                    },
                ],
            }}
        />
    ) : null;

    const barChart = infected ? (
        <Bar
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [
                    {
                        label: "People",
                        backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
                        data: [infected, recovered, deaths],
                    },
                ],
            }}
            options={{
                legend: { display: false },
            }}
        />
    ) : null;

    return (
        <div className="graph">
            <div className="plot">{props.country ? barChart : lineChart}</div>
        </div>
    );
}

export default Graph;
