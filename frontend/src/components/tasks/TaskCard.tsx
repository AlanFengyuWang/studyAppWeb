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
import { MdDeleteForever } from "react-icons/md";

const TaskCard = ({
  task,
  index,
  onSwipeDelete,
}: {
  task: TaskFormValues;
  index: number;
  onSwipeDelete: Function;
}) => {
  const [hoveredTaskId, sethoveredTaskId] = useState("");

  useEffect(() => {
    console.log("hoveredTaskId = " + hoveredTaskId);
  }, [hoveredTaskId]);

  //deciding the background color: red means its urgent, oragne means it's moderate urgent, green means it's not urgent
  let defaultColor = Theme.colors.task.green;
  let draggingColor = Theme.colors.task.dragging;

  const imgPath = "/taskTypes/" + task.type + ".svg";

  // const getTaskCardStyle = (isDragging, draggableStyle) => ({})

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => (
    <Box
      // background={isDragging ? draggingColor : defaultColor}
      borderRadius="10"
      width="100%"
      padding="7%"
      paddingLeft="5"
      marginBottom="2%"
      backgroundColor={defaultColor}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      // style={draggableStyle}
      {...(task._id === hoveredTaskId ? buttonStyles.moveTaskCardToLeft : {})}
    >
      {/* <Box
        className="CardContent"
        {...(task._id === hoveredTaskId ? moveTaskCardToLeft : {})}
      > */}
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
          fontSize="xs"
          float="right"
          fontWeight="semibold"
        >
          <>Due: {task.due}</>
        </Text>
      )}
      {/* </Box> */}
      {/* the invisible button that can display the delete button when users hover on it */}
      <Button
        {...deleteInvisibleButton}
        position="absolute"
        //delete the invisible if it has moved

        //set the hovered task id once hover the invisible button
        onMouseEnter={() => {
          sethoveredTaskId(task._id);
        }}
        onMouseLeave={() => {
          sethoveredTaskId("");
        }}
        // {...(task._id === hoveredTaskId && {
        //   display: "none",
        // })}
      ></Button>
      <Button
        {...buttonStyles.hideDelete}
        {...buttonStyles.deleteButton}
        opacity="100%"
        position="absolute"
        //update the hovered task id when the mouse is interacting the delete button
        onMouseEnter={() => {
          sethoveredTaskId(task._id);
        }}
        onMouseLeave={() => {
          sethoveredTaskId("");
        }}
        onClick={() => onSwipeDelete(task._id)}
        //makes sure that it get moved when we hover on the invisibile button above and it's still outside the screen
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
      )}
    </Draggable>
  );
};

export default TaskCard;
