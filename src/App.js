import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Dashboard from "./Dashboard";

const history = createBrowserHistory();

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Dashboard history={history} />
        </Route>
      </Switch>
    </Router>
  );
}
