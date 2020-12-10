import React from "react";
import { Switch, Route, Link as RouterLink, NavLink } from "react-router-dom";
// import { Box, Link } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import ContainedButtons from "./components/Button/Button";

import Home from "./Home";
import Logs from "./Logs";
import LogDetail from "./LogDetail";

const App = () => {
  return (
    <div>
      <NavLink
        activeStyle={{ backgroundColor: "blue", textDecoration: "none" }}
        exact
        to="/"
      >
        <ContainedButtons>
          <span>HOME</span>
        </ContainedButtons>
      </NavLink>
      <ContainedButtons>
        <NavLink
          activeStyle={{ backgroundColor: "white", textDecoration: "none" }}
          to="/logs"
        >
          Logs
        </NavLink>
      </ContainedButtons>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/logs" component={Logs}></Route>
        <Route path="/logDetail" component={LogDetail}></Route>
      </Switch>
    </div>
  );
};

export default App;
