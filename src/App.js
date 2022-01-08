import React,{ useState } from 'react';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import Donation from './screens/Donation';
import NGO from './screens/NGO';
import Invest from './screens/Invest';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

 const [isNewUser, setIsNewUser] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
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
