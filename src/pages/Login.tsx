import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Container, Flex, Heading } from "@chakra-ui/layout";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import ortexLogo from "../images/ortexL.png";

export const Login: React.FC = () => {
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
                    <Input
                      {...field}
                      id="password"
                      placeholder="Password"
                      type="password"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
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
              >
                Login
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
