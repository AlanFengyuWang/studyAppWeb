import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Login from "./login";
import { useSession, getSession } from "next-auth/react";
import { stat } from "fs/promises";
import type { GetSessionParams } from "next-auth/react";
import type { Session } from "next-auth";
import HomePage from "./home";
import userisExist from "../functions/users/UserisExist";
import { addUser } from "../functions/users/AddUser";
import { useEmailContext } from "./EmailContext";

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
      name: { first: nameParts[0], last: nameParts[nameParts.length - 1] },
      email: session.user.email,
      image: session.user.image,
    };
    //insert user if it doesn't exist in the database
    // console.log("userInfo.email = " + userInfo.email);

    const result = await userisExist(userInfo.email);
    if (!result) {
      addUser(userInfo);
    }
  }
};

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  //check if the user is authenticated
  useEffect(() => {
    if (status === "authenticated") {
      checkRegisterUser(session);
    }
  }, [status]);

  //using useContext to set email after logged in
  const { setEmail } = useEmailContext();
  setEmail(
    session && session.user && session.user.email ? session.user.email : ""
  );

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
