import React from "react";
import { Link } from "react-router-dom"

const Grocery = ( {grocery} ) => {
    const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
    background: "#4777",
    text: "white"
    }

    return (
        <div style={div}>
            <Link to={`/grocery/${grocery.id}`}>
                <h1>{grocery.grocery}</h1>
            </Link>
            <h2>{grocery.quantity}</h2>
        </div>
    );
};

export default Grocery;