import React, { StrictMode, useEffect, useState } from "react";
import Profile from "../../components/home/Profile";
import ProgressCards from "../../components/home/taskProgress/ProgressDisplay";
import TodayTaskList from "../../components/home/TodayTaskList";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import AddTask from "../../components/tasks/AddTask";
import { useEmailContext } from "../../context/EmailContext";
import useSWR from "swr";
import IncomingSchedule from "../../components/home/incomingSchedule/IncomingSchedule";
import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  Droppable,
  DropResult,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import Dnd from "../../components/dndExample/Dnd";
import DragDropTaskList from "../../components/tasks/DragDropTaskList";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { TaskFormValues, TaskType } from "../../types";
import TaskCard from "../../components/tasks/TaskCard";

const HomePage = () => {
  //using useContext to set email after logged in
  const { data: session } = useSession();
  const { setEmail } = useEmailContext();
  useEffect(() => {
    setEmail(
      session && session.user && session.user.email ? session.user.email : ""
    );
  }, []);

  const { email } = useEmailContext();
  const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, mutate } = useSWR(SHOW_TASK_URL, fetcher);

  //drag and drop
  const [listItems, setItems] = useState<TaskFormValues[]>();

  useEffect(() => {
    // const newArray = [];
    // if (data && data.tasks) newArray.push(data.tasks);
    // console.log(newArray);
    if (data && data.tasks) setItems(data.tasks);
  }, [data]);

  const reorder = (
    list: TaskFormValues[] | undefined,
    startIndex: number,
    endIndex: number
  ) => {
    if (list == undefined) return [];
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorder(
      listItems,
      result.source.index,
      result.destination.index
    );
    if (items) setItems(items);
  };

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
        <TodayTaskList
          tasks={listItems ? listItems : []}
          error={error}
          mutate={mutate}
        />
        
        {/* <DragDropTaskList
            tasks={listItems ? listItems : []}
            error={error}
            mutate={mutate}
          /> */}
        </DragDropContext>
      </Box>
      {/* <Dnd /> */}
    </Box>
  );
};

HomePage.auth = true;

export default HomePage;
