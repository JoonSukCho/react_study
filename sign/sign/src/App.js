import React, { useState, useEffect } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import TopNavBar from "./TopNavBar";

const App = () => {
  return (
    <Router>
      <header>
        <Route component={TopNavBar}></Route>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={SignIn}></Route>
          <Route exact path="/signUp" component={SignUp}></Route>
          <Route
            render={({ location }) => (
              <div>
                <h2>404</h2>
                <p>{location.pathname}</p>
              </div>
            )}
          ></Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
