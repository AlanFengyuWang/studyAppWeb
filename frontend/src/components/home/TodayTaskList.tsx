import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import TaskCard from "../tasks/TaskCard";
import useSWR from "swr";
import { useEmailContext } from "../../pages/EmailContext";
import { TaskFormValues } from "../../types";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import { MdDeleteForever } from "react-icons/md";

import { deleteActionContent } from "../../styles/home/styledComponents";
import "react-swipeable-list/dist/styles.css";

const TodayTaskList = () => {
  const [showAllTask, setshowAllTask] = useState(false);
  const showAll = () => {
    setshowAllTask(!showAllTask);
  };

  //fetch all existing unfinished tasks for the user
  const { email } = useEmailContext();
  const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(SHOW_TASK_URL, fetcher);

  if (error)
    return (
      <Alert status="error" marginTop="3%" padding="12px">
        <AlertIcon />
        <Text fontSize="sm">Failed to fetch your tasks</Text>
      </Alert>
    );

  return (
    <Stack align="stretch" marginTop="3">
      <SwipeableList>
        {data &&
          data.tasks
            .filter((item: TaskFormValues, index: number) => {
              const endIndex: number = showAllTask ? data.tasks.length : 3;
              return index < endIndex;
            })
            .map((task: TaskFormValues, index: number) => (
              <SwipeableListItem
                // leadingActions={leadingActions()}
                trailingActions={trailingActions()}
              >
                <TaskCard task={task} key={index} />
              </SwipeableListItem>
            ))}
      </SwipeableList>
      <Button
        bg="none"
        marginTop="0 !important"
        _hover={{ bg: "none" }}
        _active={{ bg: "none" }}
        color="#2B6CB0"
        fontWeight="600"
        onClick={showAll}
      >
        {showAllTask ? "Hide" : "Show All"}
      </Button>
    </Stack>
  );
};

const trailingActions = () => (
  <TrailingActions>
    <SwipeAction
      destructive={true}
      onClick={() => console.info("swipe action triggered")}
    >
      <Flex
        backgroundColor="#E53E3E"
        borderRadius="10"
        marginBottom="9px"
        paddingRight="15px"
        paddingTop="35px"
        {...deleteActionContent}
      >
        <MdDeleteForever color="#E2E8F0" size="43px" />
      </Flex>
    </SwipeAction>
  </TrailingActions>
);

// const leadingActions = () => (
//   <LeadingActions>
//     <SwipeAction onClick={() => console.info("swipe action triggered")}>
//       Action name
//     </SwipeAction>
//   </LeadingActions>
// );

export default TodayTaskList;
