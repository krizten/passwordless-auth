import React from "react";
import { Redirect } from "react-router-dom";

const Home = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? <Redirect to="/dashboard" /> : <Redirect to="/auth" />}
    </>
  );
};

export default Home;
