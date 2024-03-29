import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
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
import styles from "../../styles/home/task.module.css";
import { useIsDraggingContext } from "../../context/IsDraggingContext";

const TaskCard = ({
  task,
  index,
  mutate,
  hideDeleteButton = false,
}: {
  task: TaskFormValues;
  index: number;
  mutate: Function;
  hoverisDisabled: boolean;
  hideDeleteButton?: boolean;
}) => {
  const [hoveredTaskId, sethoveredTaskId] = useState("");
  const { email } = useEmailContext();

  //deciding the background color: red means its urgent, oragne means it's moderate urgent, green means it's not urgent
  let defaultColor = Theme.colors.task.green;
  const imgPath = "/taskTypes/" + task.type + ".svg";

  function onSwipeDelete(taskId: string) {
    deleteTask(email, taskId).then(() => mutate());
  }

  const clickTaskCardEvent = () => {
    //when the delete button is showing, move the delete button away from the screen when the user click on the card
    if (task._id === hoveredTaskId) {
      sethoveredTaskId("");
    } else {
      //otherwise, go into the card details
      sethoveredTaskId(task._id);
    }
  };

  //usecontext for isdragging

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => {
        return (
          <Box
            className={styles.task_Root}
            backgroundColor={defaultColor}
            ref={provided.innerRef}
            // opacity={!isDragging || snapshot.isDragging ? "100%" : "80%"}
            opacity={snapshot.isDragging ? "80%" : "100%"}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            {...(task._id === hoveredTaskId
              ? buttonStyles.moveTaskCardToLeft
              : {})}
            onClick={() => clickTaskCardEvent()}
          >
            {/* image & title */}
            <Flex gap="12%">
              <Box className={styles.taskImageTitle_Box}>
                <Box className={styles.taskImage_Box}>
                  <Image
                    layout="fixed"
                    width="40vw"
                    height="40vw"
                    src={imgPath}
                    alt="task image"
                  />
                </Box>
              </Box>
              <Text className={styles.taskTitle}>{task.taskTitle}</Text>
            </Flex>

            {/* due */}
            {task.due && (
              <Text
                color={Theme.colors.task.due}
                className={styles.taskDue}
                fontSize="xs"
                float="right"
                fontWeight="semibold"
              >
                <>Due: {task.due}</>
              </Text>
            )}
            {/* invisible button that triggers the visible delete button once user hover or click on it */}
            {!hideDeleteButton && (
              <Button
                // opacity="100% !important"
                {...deleteInvisibleButton}
                position="absolute"
                onMouseEnter={() => {
                  sethoveredTaskId(task._id);
                }}
                onMouseLeave={() => {
                  sethoveredTaskId("");
                }}
              ></Button>
            )}

            {/* the red color delete button */}
            {!hideDeleteButton && (
              <Button
                {...buttonStyles.hideDelete}
                {...buttonStyles.deleteButton}
                opacity={snapshot.isDragging ? "0" : "100%"}
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
            )}
          </Box>
        );
      }}
    </Draggable>
  );
};

export default TaskCard;
