import { Box, Flex, Stack, StackDivider, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { TaskFormValues } from "../../types";
import { Theme } from "../../styles/theme";
import Image from "next/image";

const TaskCard = ({ task }: { task: TaskFormValues }) => {
  //deciding the background color: red means its urgent, oragne means it's moderate urgent, green means it's not urgent
  const milestones = task.milestones;

  let color = Theme.colors.task.green;
  const imgPath = "/taskTypes/" + task.type + ".svg";

  console.log("task = " + JSON.stringify(task));

  return (
    <Box
      background={color}
      borderRadius="10"
      padding="5%"
      paddingLeft="5"
      marginBottom="7px"
      minWidth="100%"
    >
      <Flex gap="10%">
        <Box
          borderRadius="100%"
          backgroundColor="#C4C4C4"
          width="60px"
          height="60px"
        >
          <div style={{ position: "relative", left: "15%", top: "15%" }}>
            <Image
              layout="fixed"
              width="37vw"
              height="38vw"
              src={imgPath}
              alt="task image"
            />
          </div>
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
