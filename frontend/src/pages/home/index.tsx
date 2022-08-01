import React, { useEffect, useState } from "react";
import Profile from "../../components/home/Profile";
import ProgressCards from "../../components/home/taskProgress/ProgressDisplay";
import TodayTaskList from "../../components/home/TodayTaskList";
import { Box, Button, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import AddTask from "../../components/tasks/AddTask";
import { useEmailContext } from "../../context/EmailContext";
import useSWR from "swr";
import IncomingSchedule from "../../components/home/incomingSchedule/IncomingSchedule";
import { DragDropContext } from "react-beautiful-dnd";

const HomePage = () => {
  //using useContext to set email after logged in
  const { data: session } = useSession();
  const { setEmail } = useEmailContext();
  setEmail(
    session && session.user && session.user.email ? session.user.email : ""
  );
  const { email } = useEmailContext();
  const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, mutate } = useSWR(SHOW_TASK_URL, fetcher);

  const onDragEnd = () => {};

  return (
    <Box marginBottom="30%">
      <Profile />
      <ProgressCards />
      <Box style={{ width: "90%", margin: "0 auto" }}>
        <Text fontSize="1xl" fontWeight={600}>
          What do I need to do today?
        </Text>
        <AddTask url={SHOW_TASK_URL} mutate={() => mutate()} />
        <DragDropContext onDragEnd={onDragEnd}>
          <TodayTaskList data={data} error={error} mutate={mutate} />
          <IncomingSchedule data={data ? data.task : []} />
        </DragDropContext>
      </Box>
    </Box>
  );
};

HomePage.auth = true;

export default HomePage;
