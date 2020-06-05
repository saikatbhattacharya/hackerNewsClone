import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
