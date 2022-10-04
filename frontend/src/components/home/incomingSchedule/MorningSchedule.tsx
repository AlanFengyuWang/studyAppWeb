import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TaskFormValues } from "../../../types";
import { Theme } from "../../../styles/theme";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "../../tasks/TaskCard";

const MorningSchedule = (props: {
  scheduledTasks: TaskFormValues[];
  mutate: Function;
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
    <Droppable droppableId="column-2">
      {(provided, snapshot) => (
        <Stack
          bgColor={Theme.schedule.colors.morning}
          // bg={snapshot.isDraggingOver ? "red" : "blue"}
          minHeight={Theme.schedule.schedulePeriodsMinHeight}
          // minWidth="500px"
          borderRadius={Theme.schedule.borderRadius}
          ref={provided.innerRef}
          flexGrow={1}
          // {...provided.droppableProps}
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
              hoverisDisabled={true}
            />
          ))}
          {provided.placeholder}
        </Stack>
      )}
    </Droppable>
  );
};

export default MorningSchedule;
