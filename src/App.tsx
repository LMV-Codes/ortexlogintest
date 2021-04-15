import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Login } from "./pages/Login";

const theme = extendTheme({
  fonts: { body: "Source sans pro", heading: "Raleway" },
  colors: {
    brand: {
      50: "#0f101fe6",
      100: "#000115",
      200: "#0B0D26",
      300: "#134D4B",
      400: "#399996",
      500: "#62CBC7",
      600: "#A1E6E3",
      700: "#CEF2F1",
      800: "#ED4C42",
    },
  },
  styles: {
    global: {
      body: {
        minH: "100vh",
        bg: "brand.100",
        color: "white",
      },
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </ChakraProvider>
);
