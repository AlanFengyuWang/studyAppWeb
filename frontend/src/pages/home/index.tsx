import React, { useEffect, useState } from "react";
import Profile from "../../components/home/Profile";
import ProgressCards from "../../components/home/ProgressDisplay";
import TodayTaskList from "../../components/home/TodayTaskList";
import { Box, Button, Text } from "@chakra-ui/react";
import AddTask from "../../components/tasks/AddTask";
import { useEmailContext } from "../EmailContext";
import useSWR, { useSWRConfig } from "swr";
import { useRouter } from "next/router";

// useEffect(() => {
//   const router = useRouter();
//   router.push("/home");
// }, []);

const HomePage = () => {
  const { email } = useEmailContext();
  //fetch all existing unfinished tasks for the user
  const [mountained, setmountained] = useState<boolean>(false);
  const [tasksData, settasksData] = useState(null);

  // function fetchData(fetching: boolean) {
  //   const SHOW_TASK_URL = fetching ? process.env.GET_TASKS_URL + email : null; //fetch only if the condition is true
  //   console.log("fetching = " + fetching);

  //   const fetcher = (url: string) => fetch(url).then((res) => res.json());
  //   const { data, error } = useSWR(SHOW_TASK_URL, fetcher);
  //   //set it to false
  //   console.log("data = " + data);

  //   if (fetching && data != undefined) setfetching(false);

  //   return { data: data, error: error };
  // }
  // useEffect(() => {
  //   setmountained(true);
  // }, []);

  const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, mutate } = useSWR(SHOW_TASK_URL, fetcher);

  return (
    <Box marginBottom="30%">
      <Profile />
      <ProgressCards />
      <Box style={{ width: "90%", margin: "0 auto" }}>
        <Text fontSize="1xl" fontWeight={600}>
          What do I need to do today?
        </Text>
        <TodayTaskList data={data} error={error} mutate={mutate} />
        <AddTask url={SHOW_TASK_URL} mutate={() => mutate()} />
      </Box>
    </Box>
  );
};

HomePage.auth = true;

export default HomePage;
