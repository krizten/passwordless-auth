import React from "react";
import { Box, Text, Heading } from "@chakra-ui/core";
import Layout from "../Layout";
import { useDocTitle } from "../useDocTitle";

const Register = () => {
  useDocTitle("Dashboard | Passwordless Authentication");
  return (
    <Layout>
      <Box
        width="100%"
        margin="0 auto"
        maxWidth="36rem"
        textAlign="center"
        padding="0 1.5rem"
      >
        <Heading
          as="h1"
          size="lg"
          fontSize="2rem"
          fontFamily="'Oswald', sans-serif"
          marginBottom="1.2rem"
        >
          Hi, John Doe.
        </Heading>
        <Text opacity="0.7" marginBottom="3.5rem" fontSize="1.125rem">
          Explore the dashboard options, services and book appointments that matter to you.
        </Text>
      </Box>
    </Layout>
  );
};

export default Register;
