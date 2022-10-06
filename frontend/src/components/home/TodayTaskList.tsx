import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  border,
  Box,
  Button,
  Center,
  Flex,
  Stack,
  styled,
  Text,
} from "@chakra-ui/react";
import TaskCard from "../tasks/TaskCard";
import { TaskFormValues } from "../../types";
import { Droppable } from "react-beautiful-dnd";

const TodayTaskList = (props: {
  tasks: TaskFormValues[];
  error: any;
  mutate: Function;
}) => {
  //fix the issue of animation for drag and drop for react 18
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  const [showAllTask, setshowAllTask] = useState(false);
  const showAll = () => {
    setshowAllTask(!showAllTask);
  };

  if (props.error)
    return (
      <Alert status="error" marginTop="3%" padding="12px">
        <AlertIcon />
        <Text fontSize="sm">Failed to fetch your tasks</Text>
      </Alert>
    );

  //fix the animation of drag and drop
  if (!enabled) {
    return null;
  }

  return (
    <Droppable droppableId="column-1" isDropDisabled={false}>
      {(provided, snapshot) => (
        <Stack
          align="stretch"
          marginTop="3"
          // bg={snapshot.isDraggingOver ? "blue" : "none"}
          ref={provided.innerRef}
        >
          {props.tasks &&
            props.tasks
              .filter((item: TaskFormValues, index: number) => {
                const endIndex: number = showAllTask ? props.tasks.length : 3;
                return index < endIndex;
              })
              .map((task: TaskFormValues, index: number) => (
                <Flex width="100%" position="relative">
                  <TaskCard
                    task={task}
                    key={task._id}
                    index={index}
                    mutate={props.mutate}
                    hoverisDisabled={false}
                    isDragging={snapshot.isDraggingOver}
                    hideDeleteButton={false}
                  />
                </Flex>
              ))}

          {/* image */}
          {/* <Center width="100%" paddingBottom="10%" paddingTop="3%">
            <img
              src="/taskTypes/add.svg"
              alt="picture of the adding task"
              width="15%"
              height="15%"
            />
          </Center> */}
          {provided.placeholder}
          {props.tasks && props.tasks.length > 3 && (
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
      )}
    </Droppable>
  );
};

export default TodayTaskList;
