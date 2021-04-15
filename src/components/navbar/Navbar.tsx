import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import ortexLogo from "../../images/ortexL.png";

export const Navbar: React.FC = () => {
  return (
    <Flex
      bg="brand.100"
      h="5em"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link to="/">
        <Image h="4em" src={ortexLogo} alt="Ortex" marginLeft="1em" />
      </Link>
      <Link to="/login">
        <Button
          variant="outline"
          borderRadius="2em"
          color="white"
          marginRight="1em"
          _hover={{
            color: "brand.700",
            bg: "brand.300",
            borderColor: "brand.600",
          }}
        >
          Login
        </Button>
      </Link>
    </Flex>
  );
};
