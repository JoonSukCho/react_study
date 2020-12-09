import React from "react";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
// import { Box, Link } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import ContainedButtons from "./components/Button/Button";

import Home from "./Home";
import Logs from "./Logs";
import LogDetail from "./LogDetail";

const App = () => {
  return (
    <div>
      <Link component={RouterLink} variant="body2" underline="none" to="/">
        <ContainedButtons>HOME</ContainedButtons>
      </Link>
      <Link component={RouterLink} variant="body2" to="/logs">
        <ContainedButtons>Logs</ContainedButtons>
      </Link>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/logs" component={Logs}></Route>
        <Route path="/logDetail" component={LogDetail}></Route>
      </Switch>
    </div>
  );
};

export default App;
