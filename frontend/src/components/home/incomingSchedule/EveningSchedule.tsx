import { Box, Center, Stack, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { TaskFormValues } from "../../../types";
import Image from "next/image";
import { Theme } from "../../../styles/theme";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "../../tasks/TaskCard";

const EveningSchedule = (props: {
  scheduledTasks: TaskFormValues[];
  mutate: Function;
  isDragging: boolean;
}) => {
  //fix the issue of animation for drag and drop for react 18
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  //fix the animation of drag and drop
  if (!enabled) {
    return null;
  }
  return (
    <Droppable droppableId="column-4">
      {(provided, snapshot) => (
        <Stack
          bgColor={Theme.schedule.colors.evening}
          minHeight={Theme.schedule.schedulePeriodsMinHeight}
          borderRadius={Theme.schedule.borderRadius}
          opacity={props.isDragging ? "70%" : "100%"}
          ref={provided.innerRef}
          flexGrow={1}
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
          <VStack>
            {props.scheduledTasks.map((task, index) => (
              <Box width="80%">
                <TaskCard
                  task={task}
                  key={task._id}
                  index={index}
                  mutate={props.mutate}
                  hoverisDisabled={true}
                  hideDeleteButton={true}
                />
              </Box>
            ))}
          </VStack>
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
