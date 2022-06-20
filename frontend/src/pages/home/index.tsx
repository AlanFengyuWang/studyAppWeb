import React from "react";
import Profile from "../../components/home/Profile";
import ProgressCards from "../../components/home/ProgressDisplay";
import TodayTaskList from "../../components/home/TodayTaskList";
import { Text } from "@chakra-ui/react";
import AddTask from "../../components/tasks/AddTask";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();
  console.log("data = " + JSON.stringify(session));

  return (
    <div>
      <Profile />
      <ProgressCards />
      <div style={{ paddingLeft: "5%" }}>
        <Text fontSize="1xl" fontWeight={600}>
          What do I need to do today?
        </Text>
        <AddTask />
        <TodayTaskList />
      </div>
    </div>
  );
};

HomePage.auth = true;

export default HomePage;
