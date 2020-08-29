import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProctectedRoute = ({
  component: Component = null,
  render: Render = null,
  path,
  exact,
  ...rest
}) => {
  const isAuthenticated = false;
  const routeComponent = (props) =>
    isAuthenticated ? (
      Render ? (
        Render(props)
      ) : Component ? (
        <Component {...props} />
      ) : null
    ) : (
      <Redirect to={{ pathname: "/auth", state: { from: props.location } }} />
    );
  return <Route path={path} exact={exact} {...rest} render={routeComponent} />;
};

export default ProctectedRoute;
