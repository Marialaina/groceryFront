import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const SingleGrocery = ({ groceries, match, edit, deleteGroceries }) => {
  const id = parseInt(match.params.id); //get the id from url param
  console.log(id)
  console.log(groceries)
  const grocery = groceries.find((grocery) => grocery.id === id);
  console.log(grocery)

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
    background: "#4777",
    color: "#e87ac1"
  };

  const button = {
     margin: "10px",  
  }

  return (
    <div style={div}>
      <h1>{grocery.grocery}</h1>
      <h2>{grocery.quantity}</h2>
      <button style={button} onClick={(event) => edit(grocery)}>Edit</button>
      <button style={button} onClick={(event) => deleteGroceries(grocery)}>Delete</button>
      <Link to="/">
        <button style={button} >Home</button>
      </Link>
    </div>
  );
};

export default SingleGrocery;