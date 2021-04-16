import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Container, Flex } from "@chakra-ui/layout";
import { Fade } from "@chakra-ui/transition";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { ResetPassword } from "../components/forgotPassword/ResetPassword";
import ortexLogo from "../images/ortexL.png";

export const Login: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [showPassword, setshowPassword] = useState(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .min(5, "Email is too short")
      .max(100, "Email is too long")
      .email()
      .required(),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .max(100, "Password is too long")
      .required(),
  });
  return (
    <>
      <Fade in={isOpen}>
        <ResetPassword toggle={onToggle} />
      </Fade>
      <Container marginTop="2em" bg="brand.200" borderRadius="0.2em">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Flex display="column" textAlign="center" padding="2em">
                <Image
                  src={ortexLogo}
                  alt="ORTEX"
                  h="5em"
                  marginLeft="auto"
                  marginRight="auto"
                />

                <Field name="email">
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel htmlFor="email" marginTop="2em">
                        Email
                      </FormLabel>
                      <Input {...field} id="email" placeholder="Email" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <FormLabel marginTop="2em" htmlFor="password">
                        Password
                      </FormLabel>
                      <Flex alignItems="center">
                        <Input
                          {...field}
                          id="password"
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                        />
                        {showPassword ? (
                          <ViewOffIcon
                            fontSize="1.5em"
                            marginLeft="0.5em"
                            _hover={{ cursor: "pointer", color: "brand.400" }}
                            onClick={() => setshowPassword(false)}
                          />
                        ) : (
                          <ViewIcon
                            fontSize="1.5em"
                            marginLeft="0.5em"
                            _hover={{ cursor: "pointer", color: "brand.400" }}
                            onClick={() => setshowPassword(true)}
                          />
                        )}
                      </Flex>
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    w="6em"
                    mt="2em"
                    bg="brand.400"
                    _hover={{
                      color: "brand.700",
                      bg: "brand.300",
                      borderColor: "brand.600",
                    }}
                    isLoading={props.isSubmitting}
                    type="submit"
                    fontWeight="regular"
                  >
                    Login
                  </Button>
                  <Button
                    variant="link"
                    colorScheme="gray"
                    fontWeight="regular"
                    marginTop="1em"
                    onClick={onToggle}
                  >
                    Forgot password?
                  </Button>
                </Flex>
              </Flex>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};
