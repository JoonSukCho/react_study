import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";
import RouterHookSample from "./RouterHookSample";

const Profiles = () => {
  return (
    <div>
      <h3>User Lists: </h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/a"
            activeStyle={{ background: "black", color: "white" }}
          >
            a
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/b"
            activeStyle={{ background: "black", color: "white" }}
          >
            b
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile}></Route>
      <WithRouterSample></WithRouterSample>
      <RouterHookSample></RouterHookSample>
    </div>
  );
};

export default Profiles;
