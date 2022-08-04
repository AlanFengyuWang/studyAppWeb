import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { TaskFormValues } from "../../../types";
import { Theme } from "../../../styles/theme";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "../../tasks/TaskCard";

const MorningSchedule = (props: { scheduledTasks: TaskFormValues[] }) => {
  return (
    <Box
      bgColor={Theme.schedule.colors.morning}
      minHeight={Theme.schedule.schedulePeriodsHeight}
      // minHeight="1000px"
      borderRadius={Theme.schedule.borderRadius}
    >
      <Center>
        <Image
          src="/schedule/morning.svg"
          alt="picture of the morning schedule"
          width={50}
          height={50}
        />
        {/* {props.scheduledTasks.map(task => {
        })} */}
      </Center>
      {props.scheduledTasks.map((task, index) => (
        <TaskCard task={task} key={task._id} index={index} />
      ))}
    </Box>
  );
};

export default MorningSchedule;
