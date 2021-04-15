import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: { body: "Source Sans Pro", heading: "Raleway" },
  colors: {
    brand: {
      100: "#000115",
      500: "#62CBC7",
      700: "#ED4C42",
    },
  },
});

export const App = () => <ChakraProvider theme={theme}></ChakraProvider>;
