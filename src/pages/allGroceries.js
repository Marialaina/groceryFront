import React from "react";
import Grocery from "../components/grocery";

const AllGroceries = (props) => {
    return props.groceries.map((grocery) => <Grocery grocery={grocery} key={grocery.id} />);
}

export default AllGroceries;