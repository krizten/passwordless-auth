/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Link,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Text,
} from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";
import OtpInput from "react-otp-input";
import Layout from "../Layout";
import { useDocTitle } from "../useDocTitle";
import { useFormValidation } from "../useFormValidation";
import logo from "../logo.png";

const Login = () => {
  useDocTitle("Login | Passwordless Authentication");
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));

  const [formState, setFormState] = useState({
    email: "",
    otp: "",
    isSubmitting: false,
  });

  const [formStateErrors, onBlur] = useFormValidation({
    email: "",
  });

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    onBlur(e);
  };

  const onSubmit = () => {};

  return (
    <Layout hideHeader={true}>
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
          <Text display="flex" justifyContent="center">
            <Link
              textAlign="center"
              as={RouterLink}
              to="/"
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
            >
              <Image size="5rem" src={logo} alt="logo" />
            </Link>
          </Text>
          <form style={{ marginTop: "2rem" }} onSubmit={onSubmit}>
            <FormControl
              mb={5}
              textAlign="left"
              isInvalid={formStateErrors.email ? true : false}
            >
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="johndoe@domain.com"
                value={formState.email}
                onChange={onChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>{formStateErrors.email}</FormErrorMessage>
            </FormControl>
            <FormControl mb={8} textAlign="left" className="otp-input">
              <FormLabel htmlFor="otp">OTP Code</FormLabel>
              <OtpInput
                value={formState.otp}
                onChange={onChange}
                numInputs={6}
                isInputNum={true}
                isDisabled={!true}
              />
            </FormControl>
            <Button
              mt={4}
              variantColor="teal"
              isLoading={formState.isSubmitting}
              type="submit"
              w="100%"
              isDisabled={!true}
            >
              <span>Login</span>
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
