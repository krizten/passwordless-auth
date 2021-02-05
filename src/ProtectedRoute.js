import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { StoreContext } from "./store";

const ProctectedRoute = ({
  component: Component = null,
  render: Render = null,
  path,
  exact,
  ...rest
}) => {
  const { isAuthenticated } = useContext(StoreContext);

  const routeComponent = (props) =>
    isAuthenticated ? (
      Render ? (
        Render(props)
      ) : Component ? (
        <Component {...props} />
      ) : null
    ) : (
      <Redirect to={{ pathname: "/", state: { from: props.location } }} />
    );

  return <Route path={path} exact={exact} {...rest} render={routeComponent} />;
};

export default ProctectedRoute;
