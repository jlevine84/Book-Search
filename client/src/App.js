import React, { Component } from "react";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={Books}></Route>
          <Route exact path="/books" component={Books}></Route>
          <Route exact path="/saved" component={Saved}></Route>
        </Switch>
        </div>
      </Router>
    );
  }
}


export default App;