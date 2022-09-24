import { Box, Center, Stack } from "@chakra-ui/react";
import React from "react";
import { TaskFormValues } from "../../../types";
import Image from "next/image";
import { Theme } from "../../../styles/theme";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "../../tasks/TaskCard";

const AfternoonSchedule = (props: {
  scheduledTasks: TaskFormValues[];
  mutate: Function;
}) => {
  return (
    <Droppable droppableId="column-4">
      {(provided, snapshot) => (
        <Stack
          bgColor={Theme.schedule.colors.afternoon}
          minHeight={Theme.schedule.schedulePeriodsMinHeight}
          borderRadius={Theme.schedule.borderRadius}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Center>
            <Image
              src="/schedule/afternoon.svg"
              alt="picture of the afternoon schedule"
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

export default AfternoonSchedule;
