import React from "react";

function CardList(props) {
    return (
        <div>
            <div className="cardList">
                <h3>{props.container.name}</h3>
                <h4>{props.container.amount}</h4>
                <p>Last Updated</p>
                <p>{props.date}</p>
            </div>
        </div>
    );
}

export default CardList;
