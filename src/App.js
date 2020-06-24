import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import Home from "./components/Home";
import SearchUser from "./components/SearchUser";
import ModifyUser from "./components/ModifyUser";
import DeleteUser from "./components/DeleteUser";
import UserDetails from "./components/UserDetails";

// solo un comentario
// Chale

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}></Route>

          <Route exact path="/add_user" component={AddUser}></Route>
          <Route exact path="/search_user" component={SearchUser}></Route>
          <Route exact path="/modify_user" component={ModifyUser}></Route>
          <Route exact path="/delete_user" component={DeleteUser}></Route>
          <Route exact path="/user_details" component={UserDetails}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
