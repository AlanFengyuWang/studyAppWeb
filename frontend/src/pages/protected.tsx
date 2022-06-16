import { Spinner } from "@chakra-ui/react";
import { stat } from "fs";
import { useSession } from "next-auth/react";
import Router from "next/router";
import LogIn from "../pages/login";

export default function AuthGuard({ children }: { children: JSX.Element }) {
  // const { status } = useSession();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, go back to the sign in page
      Router.push("/login");
    },
  });

  // if (status === "authenticated") {
  //   return <>{children}</>;
  // } else if (status === "unauthenticated") {
  //   Router.push("/login");
  // } else if (status === "loading") {
  //   console.log("loading");
  // }
  return <>{children}</>;
}
