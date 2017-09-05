import React, { Component } from 'react';
import logo from './logo.svg';
import 'spectre.css'
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import HomePage from "./components/pages/Home";
import TabsPage from "./components/pages/TabsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Linking's React Components</h2>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tabs">Tabs</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/tabs" component={TabsPage}/>
            <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
