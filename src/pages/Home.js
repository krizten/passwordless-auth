import React from "react";
import { Redirect } from "react-router-dom";
import Layout from "../Layout";
import { useDocTitle } from "../useDocTitle";

const Home = () => {
  useDocTitle("Home | Passwordless Authentication");
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Layout>
      <div></div>
    </Layout>
  );
};

export default Home;
