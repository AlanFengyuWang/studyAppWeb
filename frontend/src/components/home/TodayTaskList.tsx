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
import { buttonStyles } from "../../styles/home/buttonStyles";

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

  //Functions
  const displayThreeTasks = (item: TaskFormValues, index: number) => {
    const endIndex: number = showAllTask ? props.tasks.length : 3;
    return index < endIndex;
  };

  return (
    <Droppable droppableId="column-1" isDropDisabled={false}>
      {(provided, snapshot) => (
        <Stack
          marginBottom="30%"
          // marginTop={props.isScheduled && props.isDragging ? "100px" : "3"}
          ref={provided.innerRef}
        >
          {props.tasks &&
            props.tasks
              .filter(displayThreeTasks)
              .map((task: TaskFormValues, index: number) => (
                <Flex>
                  <TaskCard
                    task={task}
                    key={task._id}
                    index={index}
                    mutate={props.mutate}
                    hoverisDisabled={false}
                    // isDragging={snapshot.isDraggingOver}
                    hideDeleteButton={false}
                  />
                </Flex>
              ))}
          {provided.placeholder}
          {props.tasks && props.tasks.length > 3 && (
            <Button {...buttonStyles.showAll} onClick={showAll}>
              {showAllTask ? "Hide" : "Show All"}
            </Button>
          )}
        </Stack>
      )}
    </Droppable>
  );
};

export default TodayTaskList;
