import React from "react";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Nav from './components/Nav/Nav';
import Title from './components/Title/Title'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Title/>
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