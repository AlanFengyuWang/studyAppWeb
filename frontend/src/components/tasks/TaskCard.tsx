import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { TaskFormValues } from "../../types";
import { Theme } from "../../styles/theme";
import Image from "next/image";
import {
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import {
  buttonStyles,
  deleteInvisibleButton,
  deleteVisibleButton,
} from "../../styles/home/buttonStyles";
import { deleteTask } from "../../functions/tasks/deleteTask";
import { MdDeleteForever } from "react-icons/md";
import { useEmailContext } from "../../context/EmailContext";

const TaskCard = ({
  task,
  index,
  mutate,
  hoverisDisabled,
  isDragging,
}: {
  task: TaskFormValues;
  index: number;
  mutate: Function;
  hoverisDisabled: boolean;
  isDragging: boolean;
}) => {
  const [hoveredTaskId, sethoveredTaskId] = useState("");
  const { email } = useEmailContext();

  //deciding the background color: red means its urgent, oragne means it's moderate urgent, green means it's not urgent
  let defaultColor = Theme.colors.task.green;
  let draggingColor = Theme.colors.task.dragging;

  const imgPath = "/taskTypes/" + task.type + ".svg";

  function onSwipeDelete(taskId: string) {
    deleteTask(email, taskId).then(() => mutate());
  }

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => {
        return (
          <Box
            borderRadius="10"
            width="100%"
            padding="7%"
            paddingLeft="5"
            marginBottom="2%"
            position="relative"
            backgroundColor={defaultColor}
            ref={provided.innerRef}
            opacity={isDragging && !snapshot.isDragging ? "80%" : "100%"}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            {...(task._id === hoveredTaskId
              ? buttonStyles.moveTaskCardToLeft
              : {})}
          >
            <Flex gap="12%">
              <Box
                borderRadius="100%"
                backgroundColor="#C4C4C4"
                width="60px"
                height="60px"
                pos="relative"
                bottom="1"
              >
                <Box position="relative" left="14%" top="10%">
                  <Image
                    layout="fixed"
                    width="40vw"
                    height="40vw"
                    src={imgPath}
                    alt="task image"
                  />
                </Box>
              </Box>
              <Text fontWeight="semibold">{task.taskTitle}</Text>
            </Flex>
            {/* due */}
            {task.due && (
              <Text
                color={Theme.colors.task.due}
                position="absolute"
                left="45%"
                fontSize="xs"
                float="right"
                fontWeight="semibold"
              >
                <>Due: {task.due}</>
              </Text>
            )}
            {/* invisible button that triggers the visible delete button once user hover on it */}
            <Button
              {...deleteInvisibleButton}
              position="absolute"
              opacity="0%"
              // backgroundColor="red" //debug
              onMouseEnter={() => {
                sethoveredTaskId(task._id);
              }}
              onMouseLeave={() => {
                sethoveredTaskId("");
              }}
            ></Button>
            <Button
              {...buttonStyles.hideDelete}
              {...buttonStyles.deleteButton}
              opacity="100%"
              position="absolute"
              onMouseEnter={() => {
                sethoveredTaskId(task._id);
              }}
              onMouseLeave={() => {
                sethoveredTaskId("");
              }}
              onClick={() => onSwipeDelete(task._id)}
              // move the delete button to the left
              {...(task._id === hoveredTaskId && {
                transition: "transform 0.1s",
                transform: "translateX(-42%)",
                zIndex: "1",
              })}
              //make sure after it moved and are hovered, it stays in the same place
              _hover={{
                transition: "transform 0.1s",
                transform: "translateX(-42%)",
                zIndex: "1",
              }}
            >
              <MdDeleteForever color="#E2E8F0" size="43px" />
            </Button>
          </Box>
        );
      }}
    </Draggable>
  );
};

export default TaskCard;
