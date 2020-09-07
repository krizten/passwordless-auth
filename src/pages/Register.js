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
import { Link as RouterLink, useHistory } from "react-router-dom";
import Layout from "../Layout";
import { useDocTitle } from "../useDocTitle";
import { useFormValidation } from "../useFormValidation";
import logo from "../logo.png";
import { otpStart } from "../services";
import { useToasts } from "react-toast-notifications";

const Register = () => {
  useDocTitle("Register | Passwordless Authentication");
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));

  const history = useHistory();

  const { addToast } = useToasts();

  const [formState, setFormState] = useState({
    email: "",
    isSubmitting: false,
  });

  const [formStateErrors, onBlur] = useFormValidation({
    email: "",
  });

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    onBlur(e);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const { email } = formState;
    if (email) {
      setFormState({ ...formState, isSubmitting: true });
      try {
        const data = await otpStart({ email });
        setFormState({ ...formState, isSubmitting: false });
        addToast(`OTP Code has been sent to ${email}`, {
          appearance: "success",
          autoDismiss: true,
        });
        history.push({
          pathname: "/login",
          state: { data },
        });
      } catch (err) {
        console.warn(Object.entries(err));
        setFormState({ ...formState, isSubmitting: false });
      }
    }
  };

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
              mb={8}
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
            <Button
              mt={4}
              variantColor="teal"
              isLoading={formState.isSubmitting}
              type="submit"
              w="100%"
              onClick={onSubmit}
            >
              <span>Sign Up</span>
            </Button>
          </form>
        </Box>
        <Text fontSize="0.8rem">
          <span>Already have an account?</span>{" "}
          <Link
            textAlign="center"
            as={RouterLink}
            to="/login"
            _hover={{ textDecoration: "none" }}
            color="#81E6D9"
          >
            Log In
          </Link>
        </Text>
      </Box>
    </Layout>
  );
};

export default Register;
