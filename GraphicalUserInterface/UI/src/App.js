import React from "react";
import "./App.css";
import TopNavBar from "./components/TopNavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Apple from "./components/Apple";
import AMD from "./components/AMD";
import Disney from "./components/Disney";
import Tesla from "./components/Tesla";
import TechnicalDetails from "./components/TechnicalDetails";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNavBar></TopNavBar>
        </div>
        <Switch>
          <Route exact path="/" component={Apple}></Route>
          <Route path="/amd" component={AMD}></Route>
          <Route path="/disney" component={Disney} />
          <Route path="/tesla" component={Tesla} />
          <Route path="/technicalDetails" component={TechnicalDetails} />
          <Route path="/help" component={Help} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </Router>
    );
  }
}

export default App;
