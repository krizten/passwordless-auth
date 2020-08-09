import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
