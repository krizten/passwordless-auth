import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Link,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../Layout";
import { useDocTitle } from "../useDocTitle";

const Login = () => {
  useDocTitle("Login | Passwordless Authentication");

  const darkMode = JSON.parse(localStorage.getItem("darkMode"));

  const { handleSubmit, errors, register, formState } = useForm();

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value !== "Naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error || true;
  };

  const onSubmit = (values) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  };

  return (
    <Layout isAuthPage={true}>
      <Box
        margin="0 auto"
        maxWidth={["22rem", "22rem", "25rem", "25rem"]}
        textAlign="center"
      >
        <Box
          width="100%"
          padding="1rem 2rem 2rem"
          borderRadius="5px"
          bg={darkMode ? "gray.900" : "gray.50"}
          marginBottom="5px"
        >
          <Link
            textAlign="center"
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: "none" }}
          >
            <Image
              size="5rem"
              src="https://i.postimg.cc/K8ZDTmrb/logo-bg.png"
              alt="logo"
              margin="0 auto"
            />
          </Link>
          <form style={{ marginTop: "2rem" }} onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={5} textAlign="left" isInvalid={errors.name}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="johndoe@domain.com"
                ref={register({ validate: validateName })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mb={8} textAlign="left" isInvalid={errors.name}>
              <FormLabel htmlFor="otp">OTP Code</FormLabel>
              <Input
                name="otp-code"
                id="name"
                placeholder="1122333"
                ref={register({ validate: validateName })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt={4}
              variantColor="teal"
              isLoading={formState.isSubmitting}
              type="submit"
              w="100%"
              isDisabled={!true}
            >
              {!true ? <Spinner size="md" /> : <span>Login</span>}
            </Button>
          </form>
        </Box>
        <Text fontSize="0.8rem">
          <span>Don't have an account?</span>{" "}
          <Link
            textAlign="center"
            as={RouterLink}
            to="/register"
            _hover={{ textDecoration: "none" }}
            color="#81E6D9"
          >
            Sign Up
          </Link>
        </Text>
      </Box>
    </Layout>
  );
};

export default Login;
