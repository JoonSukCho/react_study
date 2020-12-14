import React from "react";
import { Route, withRouter } from "react-router-dom";
import CounterContainer from "./containers/CounterContainer";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <>
      {/* <CounterContainer></CounterContainer> */}
      <Route path="/" component={PostListPage} exact={true}></Route>
      <Route path="/:id" component={PostPage}></Route>
    </>
  );
};

export default withRouter(App);
