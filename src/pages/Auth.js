import React from "react";
import Layout from "../Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";

const Auth = () => {
  return (
    <Layout>
      <div>
        <Login />
        <Register />
      </div>
    </Layout>
  );
};

export default Auth;
