import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Dashboard from "../pages/Dashboard";

import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} isPrivate />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
