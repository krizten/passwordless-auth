import React from "react";
import Layout from "../Layout";
import { useDocTitle } from "../useDocTitle";

const Register = () => {
  useDocTitle("Dashboard | Passwordless Authentication");
  return (
    <Layout>
      <div>Dashboard works!</div>
    </Layout>
  );
};

export default Register;
