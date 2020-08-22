import React from "react";
import Layout from "../Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { useDocTitle } from "../useDocTitle";

const Auth = () => {
  useDocTitle("Auth | Passwordless Authentication");
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
