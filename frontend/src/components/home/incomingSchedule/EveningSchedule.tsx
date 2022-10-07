import { Box, Center, Stack } from "@chakra-ui/react";
import React from "react";
import { TaskFormValues } from "../../../types";
import Image from "next/image";
import { Theme } from "../../../styles/theme";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "../../tasks/TaskCard";

const EveningSchedule = (props: {
  scheduledTasks: TaskFormValues[];
  mutate: Function;
  // isDragging: boolean;
  setIsDragging: Function;
}) => {
  return (
    <Droppable droppableId="column-4">
      {(provided, snapshot) => (
        <Stack
          bgColor={Theme.schedule.colors.evening}
          minHeight={Theme.schedule.schedulePeriodsMinHeight}
          borderRadius={Theme.schedule.borderRadius}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Center>
            <Image
              src="/schedule/evening.svg"
              alt="picture of the evening schedule"
              width={36}
              height={36}
            />
          </Center>
          {props.scheduledTasks.map((task, index) => (
            <TaskCard
              task={task}
              key={task._id}
              index={index}
              mutate={props.mutate}
              hoverisDisabled={true}
              // isDragging={props.isDragging}
              setIsDragging={props.setIsDragging}
            />
          ))}
          {provided.placeholder}
        </Stack>
      )}
    </Droppable>
    // <Box
    //   bgColor={Theme.schedule.colors.evening}
    //   minHeight={Theme.schedule.schedulePeriodsMinHeight}
    //   borderRadius={Theme.schedule.borderRadius}
    // >
    //   <Center paddingTop="4px">
    //     <Image
    //       src="/schedule/evening.svg"
    //       alt="picture of the evening schedule"
    //       width={36}
    //       height={36}
    //     />
    //   </Center>
    // </Box>
  );
};

export default EveningSchedule;
