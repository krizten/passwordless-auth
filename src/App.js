import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
