import React from "react";
import Layout from "../Layout";
import { useDocTitle } from "../useDocTitle";

const Login = () => {
  useDocTitle("Login | Passwordless Authentication");
  return <Layout></Layout>;
};

export default Login;
