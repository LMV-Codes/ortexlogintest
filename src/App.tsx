import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";

const theme = extendTheme({
  fonts: { body: "Source sans pro", heading: "Raleway" },
  colors: {
    brand: {
      100: "#000115",
      300: "#134D4B",
      400: "#399996",
      500: "#62CBC7",
      600: "#A1E6E3",
      800: "#ED4C42",
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </ChakraProvider>
);
