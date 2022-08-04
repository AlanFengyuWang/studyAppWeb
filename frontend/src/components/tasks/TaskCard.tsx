import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TaskFormValues } from "../../types";
import { Theme } from "../../styles/theme";
import Image from "next/image";
import {
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";

const TaskCard = ({ task, index }: { task: TaskFormValues; index: number }) => {
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
          padding="7%"
          paddingLeft="5"
          marginBottom="2%"
          width="100%"
          backgroundColor={defaultColor}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          // style={draggableStyle}
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
        </Box>
      )}
    </Draggable>
  );
};

export default TaskCard;
