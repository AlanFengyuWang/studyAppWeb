import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Stack,
  styled,
  Text,
} from "@chakra-ui/react";
import TaskCard from "../tasks/TaskCard";
import { useEmailContext } from "../../pages/EmailContext";
import { TaskFormValues } from "../../types";
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import { MdDeleteForever } from "react-icons/md";
import {
  deleteActionStyle,
  hideDelete,
} from "../../styles/home/styledComponents";
import "react-swipeable-list/dist/styles.css";
import { deleteTask } from "../../functions/tasks/deleteTask";

const TodayTaskList = (props: { data: any; error: any; mutate: Function }) => {
  const [hoveredTaskId, sethoveredTaskId] = useState("");
  const moveTaskCardToLeftStyle = {
    transition: "transform 0.3s",
    transform: "translateX(-23%)",
    opacity: "100%",
  };

  const [showAllTask, setshowAllTask] = useState(false);
  const showAll = () => {
    setshowAllTask(!showAllTask);
  };
  const { email } = useEmailContext();
  function onSwipeDelete(taskId: string) {
    deleteTask(email, taskId).then(() => props.mutate());
  }

  const trailingActions = (taskId: string) => {
    return (
      <TrailingActions>
        <SwipeAction destructive={true} onClick={() => onSwipeDelete(taskId)}>
          <Flex {...deleteActionStyle}>
            <MdDeleteForever color="#E2E8F0" size="43px" />
          </Flex>
        </SwipeAction>
      </TrailingActions>
    );
  };

  if (props.error)
    return (
      <Alert status="error" marginTop="3%" padding="12px">
        <AlertIcon />
        <Text fontSize="sm">Failed to fetch your tasks</Text>
      </Alert>
    );

  return (
    <Stack align="stretch" marginTop="3">
      <SwipeableList>
        {props.data &&
          props.data.tasks
            .filter((item: TaskFormValues, index: number) => {
              const endIndex: number = showAllTask
                ? props.data.tasks.length
                : 3;
              return index < endIndex;
            })
            .map((task: TaskFormValues, index: number) => (
              <SwipeableListItem
                trailingActions={trailingActions(task._id)}
                key={task._id}
              >
                <Flex width="100%" position="relative">
                  <Box
                    width="100%"
                    height="100%"
                    {...(task._id === hoveredTaskId
                      ? moveTaskCardToLeftStyle
                      : {})}
                  >
                    <TaskCard task={task} key={index} />
                  </Box>
                  <Button
                    {...hideDelete}
                    opacity="0%"
                    left="80%"
                    position="absolute"
                    onMouseEnter={() => {
                      sethoveredTaskId(task._id);
                    }}
                    onMouseLeave={() => {
                      sethoveredTaskId("");
                    }}
                  ></Button>
                  <Button
                    {...hideDelete}
                    position="absolute"
                    onMouseEnter={() => {
                      sethoveredTaskId(task._id);
                    }}
                    onMouseLeave={() => {
                      sethoveredTaskId("");
                    }}
                    onClick={() => onSwipeDelete(task._id)}
                    //makes sure that it get moved when we hover on the invisibile button above and it's still outside the screen
                    {...(task._id === hoveredTaskId && {
                      transition: "transform 0.3s",
                      transform: "translateX(-100%)",
                    })}
                    //make sure after it moved and are hovered, it stays in the same place
                    _hover={{
                      transition: "transform 0.3s",
                      transform: "translateX(-100%)",
                    }}
                  >
                    <MdDeleteForever color="#E2E8F0" size="43px" />
                  </Button>
                </Flex>
              </SwipeableListItem>
            ))}
      </SwipeableList>
      {props.data && props.data.tasks.length > 3 && (
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
      )}
    </Stack>
  );
};

export default TodayTaskList;
