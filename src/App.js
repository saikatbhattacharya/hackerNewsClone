import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const Dashboard = lazy(() => import("./Dashboard"));

const history = createBrowserHistory();

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard history={history} />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}
