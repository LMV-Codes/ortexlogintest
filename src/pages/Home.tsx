import { Container, Heading, Text } from "@chakra-ui/layout";
import React from "react";

export const Home: React.FC = () => {
  return (
    <Container maxW="container.xl" centerContent>
      <Heading fontWeight="light" marginTop="2em">
        This is a login test for Ortex
      </Heading>
      <Text fontSize="1.1em" marginTop="1em">
        Please press the login button in the navbar
      </Text>
    </Container>
  );
};
