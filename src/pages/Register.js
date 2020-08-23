import React from "react";
import { Box } from "@chakra-ui/core";
import Layout from "../Layout";
import { useDocTitle } from "../useDocTitle";

const Register = () => {
  useDocTitle("Register | Passwordless Authentication");
  return (
    <Layout isAuthPage={true}>
      <Box
        width="100%"
        margin="0 auto"
        maxWidth="36rem"
        textAlign="center"
        padding="0 1.5rem"
      >
        Register Form
      </Box>
    </Layout>
  );
};

export default Register;
