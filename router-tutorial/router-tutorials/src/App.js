import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr></hr>

      {/* exact => path가 완전히 똑같을 때만 라우팅 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
      {/* path를 따로 정하지 않으면 모든 상황에 렌더링 됌. */}
      <Route
        render={({ location }) => (
          <div>
            <h2>404</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      ></Route>
    </div>
  );
};

export default App;
