import React from "react";
import Profile from "../../components/home/Profile";
import ProgressCards from "../../components/home/ProgressDisplay";
import TodayTaskList from "../../components/home/TodayTaskList";
import { Box, Text } from "@chakra-ui/react";
import AddTask from "../../components/tasks/AddTask";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();
  return (
    <Box marginBottom="30%">
      <Profile />
      <ProgressCards />
      <Box style={{ width: "90%", margin: "0 auto" }}>
        <Text fontSize="1xl" fontWeight={600}>
          What do I need to do today?
        </Text>
        <TodayTaskList />
        <AddTask />
      </Box>
    </Box>
  );
};

HomePage.auth = true;

export default HomePage;
