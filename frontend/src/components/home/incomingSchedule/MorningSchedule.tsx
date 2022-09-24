import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { TaskFormValues } from "../../../types";
import { Theme } from "../../../styles/theme";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "../../tasks/TaskCard";

const MorningSchedule = (props: {
  scheduledTasks: TaskFormValues[];
  mutate: Function;
}) => {
  return (
    <Droppable droppableId="column-2">
      {(provided, snapshot) => (
        <Stack
          bgColor={Theme.schedule.colors.morning}
          minHeight={Theme.schedule.schedulePeriodsMinHeight}
          borderRadius={Theme.schedule.borderRadius}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Center>
            <Image
              src="/schedule/morning.svg" 
              alt="picture of the morning schedule"
              width={50}
              height={50}
            />
          </Center>
          {props.scheduledTasks.map((task, index) => (
            <TaskCard
              task={task}
              key={task._id}
              index={index}
              mutate={props.mutate}
            />
          ))}
          {provided.placeholder}
        </Stack>
      )}
    </Droppable>
  );
};

export default MorningSchedule;
