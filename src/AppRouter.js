import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./Container";

export class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Container} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
