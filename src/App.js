import React from 'react';
import Home from './screens/Home';
import Auth from './screens/Auth';
import Dashboard from './screens/Dashboard';
import Donation from './screens/Donation';
import NGO from './screens/NGO';
import Invest from './screens/Invest';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/auth">
          <Auth authType="sign-up" />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/donate">
          <Donation />
        </Route>
        <Route exact path="/ngo">
          <NGO />
        </Route>
        <Route exact path="/invest">
          <Invest />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
