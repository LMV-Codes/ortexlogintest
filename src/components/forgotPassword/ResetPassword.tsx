import { Button, IconButton } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { CloseIcon } from "@chakra-ui/icons";

import { Input } from "@chakra-ui/input";
import { Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

interface resetPassword {
  toggle: () => void;
}

export const ResetPassword: React.FC<resetPassword> = ({ toggle }) => {
  const resetPasswordschema = Yup.object().shape({
    email: Yup.string()
      .min(5, "Email is too short")
      .max(100, "Email is too long")
      .email()
      .required("Type your email"),
  });
  return (
    <>
      <Flex
        bg="brand.50"
        borderRadius="0.2em"
        position="absolute"
        marginLeft="auto"
        marginRight="auto"
        height="100%"
        width="100%"
        justifyContent="center"
        zIndex="10"
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={resetPasswordschema}
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
                <Flex>
                  <Spacer />
                  <IconButton
                    marginLeft="auto"
                    textAlign="right"
                    marginTop="1em"
                    variant="ghost"
                    color="brand.600"
                    aria-label="close"
                    _hover={{ bg: "", color: "brand.400" }}
                    _active={{ bg: "" }}
                    icon={<CloseIcon />}
                    onClick={toggle}
                  />
                </Flex>
                <Heading textTransform="capitalize" fontWeight="light">
                  reset password
                </Heading>
                <Text>Enter your email to get reset instructions</Text>
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
                  Submit
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    </>
  );
};
