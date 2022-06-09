import {
  Avatar,
  Button,
  Circle,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";
const Profile = () => {
  return (
    <Flex justifyContent="space-between" margin="5% 8%">
      <Flex>
        <Stack marginLeft="11%" marginTop="7%" spacing={0}>
          <Text fontSize="3xl" fontWeight={600}>
            Welcome,
          </Text>{" "}
          <Text fontSize="2xl" color="#7A7878" fontWeight={500}>
            Alan
          </Text>
        </Stack>
      </Flex>
      <Flex>
        <Menu>
          <MenuButton
            as={Button}
            variantColor="pink"
            bg="lightgray"
            borderRadius="50%"
            h="80px"
            w="80px"
            top="20%"
          >
            <Avatar src="https://bit.ly/broken-link" bg="#" />
          </MenuButton>
          <MenuList minWidth="0" position="relative" left="15%">
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Profile;
