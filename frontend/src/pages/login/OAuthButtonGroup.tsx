import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import {
  FaceBookIcon,
  GitHubIcon,
  GoogleIcon,
  TwitterIcon,
} from "./ProviderIcons";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import type { Session } from "next-auth";

const providers = [
  { name: "Google", signInName: "google", icon: <GoogleIcon boxSize="5" /> },
  { name: "Twitter", signInName: "google", icon: <TwitterIcon boxSize="5" /> },
  { name: "GitHub", signInName: "google", icon: <GitHubIcon boxSize="5" /> },
];

export const OAuthButtonGroup = (isSigningUp?: { isSigningUp?: boolean }) => {
  return (
    <ButtonGroup variant="outline" spacing="4" width="full">
      {providers.map(({ name, signInName, icon }) => (
        <Button key={name} width="full" onClick={() => signIn(signInName)}>
          <VisuallyHidden>Sign up with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
};
