import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  border,
  Box,
  Button,
  Flex,
  Stack,
  styled,
  Text,
} from "@chakra-ui/react";
import TaskCard from "../tasks/TaskCard";
import { useEmailContext } from "../../context/EmailContext";
import { TaskFormValues } from "../../types";
import { MdDeleteForever } from "react-icons/md";
import { deleteTask } from "../../functions/tasks/deleteTask";
import { Draggable, Droppable } from "react-beautiful-dnd";

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
  const { email } = useEmailContext();
  function onSwipeDelete(taskId: string) {
    deleteTask(email, taskId).then(() => props.mutate());
  }

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
    <Droppable droppableId="droppableID" isDropDisabled={false}>
      {(provided, snapshot) => (
    <Stack
      align="stretch"
      // width="100%"
      marginTop="3"
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
                // hoveredTaskId={hoveredTaskId}
                // sethoveredTaskId={sethoveredTaskId}
                onSwipeDelete={onSwipeDelete}
              />
              {/* <TaskItem /> */}
              {/* <Button
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
                  </Button> */}
            </Flex>
          ))}
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
      {provided.placeholder}
    </Stack>
      )}
    </Droppable>
  );
};

export default TodayTaskList;
