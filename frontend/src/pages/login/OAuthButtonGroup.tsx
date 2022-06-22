import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import {
  FaceBookIcon,
  GitHubIcon,
  GoogleIcon,
  TwitterIcon,
} from "./ProviderIcons";
import { signIn } from "next-auth/react";
import { registerUser } from "../../database/registerUser";
import { useSession } from "next-auth/react";
import type { Session } from "next-auth";

const providers = [
  { name: "Google", signInName: "google", icon: <GoogleIcon boxSize="5" /> },
  { name: "Twitter", signInName: "google", icon: <TwitterIcon boxSize="5" /> },
  { name: "GitHub", signInName: "google", icon: <GitHubIcon boxSize="5" /> },
];

const signInAndRegisterThirdParty = (
  signInName: string,
  session: Session | null,
  status: string
) => {
  //sign in
  signIn(signInName);

  //then store the user info to the database
  if (
    session &&
    session.user &&
    session.user.name &&
    session.user.email &&
    session.user.image
  ) {
    //get the first and the last
    const nameParts = session.user.name.split(" ");
    const userInfo = {
      name: { first: nameParts[0], last: nameParts[-1] },
      email: session.user.email,
      image: session.user.image,
    };
  }
};

export const OAuthButtonGroup = (isSigningUp?: { isSigningUp?: boolean }) => {
  const { data: session, status } = useSession();
  return (
    <ButtonGroup variant="outline" spacing="4" width="full">
      {providers.map(({ name, signInName, icon }) => (
        <Button
          key={name}
          width="full"
          onClick={() =>
            signInAndRegisterThirdParty(signInName, session, status)
          }
        >
          <VisuallyHidden>Sign up with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
};
