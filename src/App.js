import './App.css';
import AllGroceries from './pages/allGroceries';
import SingleGrocery from './pages/singleGrocery';
import Form from './pages/Form';
import Grocery from './components/grocery';


//Import React and hooks
import React, { useState, useEffect } from 'react';

import { Route, Switch, Link } from "react-router-dom";

function App(props) {

  const h1 = {
    textAlign: "center",
    margin: "10px",
    color: "white",
  }

  const button ={
    backgroundColor: "#64a764",
    display: "block",
    margin: "auto"
  }

  //API URL
  const url = "https://grocerylistmp.herokuapp.com/groceries/";

  //state to hold the list of posts
  const [groceries, setGroceries] = useState([]);

// FUNCTIONS
const getGroceries = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setGroceries(data);
}

const addGroceries = async (newGrocery) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newGrocery),
  })
  getGroceries();
}

const nullGrocery = {
  subject: "",
  details: ""
}
const [targetGroceries, setTargetGroceries] = useState(nullGrocery)

const getTargetGroceries = async (grocery) => {
 setTargetGroceries(grocery);
 props.history.push("/edit");
}

const updateGroceries = async (grocery) => {
  const response = await fetch(url + grocery.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(grocery)
  })
  getGroceries()
}

const deleteGroceries = async (grocery) => {
  const response = await fetch(url + grocery.id + "/", {
    method: "delete",
  })
  getGroceries();
  props.history.push("/");
}

//useEFFECT
useEffect(() => {
  getGroceries();
}, []);

  return (
    <div className="App">
     <h1 style={h1}>My Grocery List</h1>
     <Link to="/new"><button style={button}>add a grocery</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllGroceries {...routerProps} 
          groceries={groceries} />}
        />
        <Route
          path="/grocery/:id"
          render={(routerProps) => (
            <SingleGrocery {...routerProps} groceries={groceries} 
            edit={getTargetGroceries} 
            deleteGroceries={deleteGroceries}/>
          )}
        />
       <Route
        path="/new"
        render={(routerProps) => (
          <Form
            {...routerProps}
            initialGrocery={nullGrocery}
            handleSubmit={addGroceries}
            buttonLabel="add grocery"
          />
          )}
        />
        <Route
          path="/edit"
          render={(routerProps) => (<Form 
            {...routerProps} 
            initialGrocery={targetGroceries}
            handleSubmit={updateGroceries}
            buttonLabel="edit grocery"
          />
          )}
          />
          <Route
            path="/grocery/:id"
            render={(routerProps) => (
          <SingleGrocery
            {...routerProps}
            groceries={groceries}
            edit={getTargetGroceries}
            deleteGroceries={deleteGroceries}
    />
  )}
/>
      </Switch>
    </div>
    
  );
}

export default App;
