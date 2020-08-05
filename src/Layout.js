import React from "react";
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  theme,
} from "@chakra-ui/core";
import ThemeSwitcher from "./ThemeSwitcher";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeSwitcher />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default Layout;
