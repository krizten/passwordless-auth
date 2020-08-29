import React from "react";
import { Redirect } from "react-router-dom";
import { Box, Text, Heading, Link } from "@chakra-ui/core";
import { useDocTitle } from "../useDocTitle";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../Layout";

const Home = () => {
  useDocTitle("Home | Passwordless Authentication");
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

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
          Welcome to Kutz Luxury
        </Heading>
        <Text opacity="0.7" marginBottom="3.5rem" fontSize="1.125rem">
          We offer various haircuts and beard trimming of all sorts. You are in
          good hands. Kutz Luxury is the prime spot for your hair grooming needs
          in your city.
        </Text>
        <Link
          as={RouterLink}
          to="/register"
          bg="teal.500"
          padding="0.8rem 2rem"
          borderRadius="3px"
          fontSize="1.125rem"
          color="#ffffff"
          _hover={{ textDecoration: "none" }}
        >
          Get Started
        </Link>
      </Box>
    </Layout>
  );
};

export default Home;
