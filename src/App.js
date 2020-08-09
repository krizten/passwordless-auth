import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/auth" component={Auth} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
