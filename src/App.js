import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import Authentication from "./pages/Authentication";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/authenticate" component={Authentication} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
