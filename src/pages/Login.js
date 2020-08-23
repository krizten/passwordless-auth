import React from "react";
import { Box } from "@chakra-ui/core";
import Layout from "../Layout";
import { useDocTitle } from "../useDocTitle";

const Login = () => {
  useDocTitle("Login | Passwordless Authentication");
  return (
    <Layout isAuthPage={true}>
      <Box
        width="100%"
        margin="0 auto"
        maxWidth="36rem"
        textAlign="center"
        padding="0 1.5rem"
      >
        Login Form
      </Box>
    </Layout>
  );
};

export default Login;
