import {
  Container,
  Heading,
  HStack,
  Stack,
  useBreakpointValue,
  Text,
  Link,
  Button,
  Box,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { Logo } from "../login/Logo";
import { OAuthButtonGroup } from "../login/OAuthButtonGroup";

const SignUp = () => {
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="2">
        <Stack spacing="6">
          <Logo />
          <Heading
            size={useBreakpointValue({ base: "lg", md: "md" })}
            textAlign="center"
          >
            Create an account
          </Heading>
          <HStack justify="center">
            <Text color="muted">Already have an account?</Text>
            <Link href="/login">
              <Button colorScheme="blue" variant="link">
                Log in
              </Button>
            </Link>
          </HStack>
        </Stack>
        <Box
          py={{ base: "5", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="8">
            <Stack spacing="5">
              <FormControl isRequired>
                <FormLabel htmlFor="name">Name:</FormLabel>
                <Input id="name" name="name"></Input>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input id="email" name="email"></Input>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password:</FormLabel>
                <Input id="password" name="password" min="8"></Input>
              </FormControl>
            </Stack>
            <Stack spacing="8">
              <Button>Create Account</Button>
            </Stack>
            <HStack marginTop="15px !important">
              <Divider />
              <Text whiteSpace="nowrap" fontSize="sm" fontWeight="200">
                or sign up with
              </Text>
              <Divider />
            </HStack>
            <OAuthButtonGroup />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default SignUp;
