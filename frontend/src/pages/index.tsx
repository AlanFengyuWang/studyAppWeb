import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Login from "./login";
import { useSession, getSession } from "next-auth/react";
import { stat } from "fs/promises";
import type { GetSessionParams } from "next-auth/react";
import type { Session } from "next-auth";
import HomePage from "./home";
import UserisExist from "../functions/users/UserisExist";

const checkRegisterUser = async (session: Session | null) => {
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
    //check if user exist
    const result = await UserisExist(userInfo.email);
    console.log("--->result = " + result);
  }
};

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      checkRegisterUser(session);
    }
  }, [status]);

  return (
    <div>
      <Head>
        <title>Study App</title>
        <meta name="description" content="Study App"></meta>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Frank+Ruhl+Libre:wght@400;500;700&family=Roboto+Condensed:ital,wght@0,300;0,400;1,300&family=Roboto:ital,wght@0,300;0,400;1,100;1,300&family=Sen:wght@400;700;800&display=swap');
        </style>
      </Head>
      <main>
        {status === "authenticated" ? (
          <Layout>
            <HomePage />
          </Layout>
        ) : (
          <Login></Login>
        )}
      </main>
    </div>
  );
};

export default Home;
