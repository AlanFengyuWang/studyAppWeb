import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TaskFormValues } from "../../types";
import { Theme } from "../../styles/theme";
import Image from "next/image";

const TaskCard = ({ task }: { task: TaskFormValues }) => {
  //deciding the background color: red means its urgent, oragne means it's moderate urgent, green means it's not urgent
  let color = Theme.colors.task.green;
  const imgPath = "/taskTypes/" + task.type + ".svg";
  console.log("hello");

  return (
    <Box
      background={color}
      borderRadius="10"
      padding="7%"
      paddingLeft="5"
      marginBottom="2%"
      width="100%"
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
  );
};

export default TaskCard;
