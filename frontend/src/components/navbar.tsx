import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Flex,
  HStack,
  Link,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/Image";
import styles from "../styles/navBar/navBar.module.css";

const navbar = () => {
  const pages = [
    {
      title: "Award",
      href: "/award",
      image: "/menuOptions/award.svg",
      paddingBottom: "0px",
    },
    {
      title: "Schedule",
      href: "/schedule",
      image: "/menuOptions/schedule.svg",
      paddingBottom: "10px",
    },
    {
      title: "Home",
      href: "/home",
      image: "/menuOptions/home.svg",
      paddingBottom: "20px",
    },
    {
      title: "Study",
      href: "/study",
      image: "/menuOptions/study.svg",
      paddingBottom: "10px",
    },
    {
      title: "Community",
      href: "/community",
      image: "/menuOptions/community.svg",
      paddingBottom: "0px",
    },
  ];
  return (
    <div className={styles.halfCircleBackground}>
      <Flex
        justify="space-evenly"
        position="fixed"
        bottom="0"
        width="100%"
        fontSize="lg"
        paddingBottom="12px"
      >
        <img
          src="/menuOptions/background.svg"
          className={styles.halfCircleBackground}
        ></img>
        {pages.map((page) => (
          <Box bg={page.title}>
            <NextLink href={page.href} passHref>
              <Image
                layout="fixed"
                width={55}
                height={55}
                src={page.image}
                alt={page.title}
              />
            </NextLink>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

// {pages.map((page) => {
//   return (
//   );
// })}

export default navbar;
