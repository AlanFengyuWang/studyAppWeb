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
  Tooltip,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
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
    <div className={styles.halfCircleBackground} style={{ zIndex: "999" }}>
      <Flex
        justify="space-evenly"
        position="fixed"
        bottom="0"
        width="100%"
        fontSize="lg"
        paddingBottom="2.5%"
      >
        <img
          src="/menuOptions/background.svg"
          className={styles.halfCircleBackground}
          style={{ width: "100%" }}
        ></img>
        {pages.map((page, index) => (
          <Box bg={page.title} key={index}>
            <Tooltip
              label={page.title}
              placement="bottom"
              position="relative"
              top="12"
            >
              <span>
                <NextLink href={page.href} passHref>
                  <Image
                    layout="fixed"
                    width="50vw"
                    height="50vw"
                    src={page.image}
                    alt={page.title}
                  />
                </NextLink>
              </span>
            </Tooltip>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default navbar;
