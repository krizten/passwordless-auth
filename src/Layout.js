import React from "react";
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  theme,
  Flex,
  Button,
  Box,
  Link,
  Image,
} from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0 1.2rem"
    >
      <Link as={RouterLink} to="/" textDecoration="none !important">
        <Image
          size="2.5rem"
          src="https://i.postimg.cc/K8ZDTmrb/logo-bg.png"
          alt="logo"
        />
      </Link>
      <Flex align="center">
        <ThemeSwitcher />
        <Button bg="transparent" border="1px">
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Header />
        <Box padding="10rem 0" margin="0 auto" maxWidth="1280px">
          {children}
        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default Layout;
