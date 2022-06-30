import React, { useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { useSession } from "next-auth/react";
import type { Session } from "next-auth";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";

const LogIn = () => {
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xl", md: "lg" })}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center" py="2">
              <Text color="muted">Don't have an account?</Text>
              <Link href="/signup">
                <Button variant="link" colorScheme="blue">
                  Sign up
                </Button>
              </Link>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="solid">Sign in</Button>
              <HStack>
                <Divider />
                <Text
                  fontSize="sm"
                  whiteSpace="nowrap"
                  color="muted"
                  fontWeight="200"
                >
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default LogIn;
