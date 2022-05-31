import NavBar from "./navbar";
import Footer from "./footer";
import React from "react";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
