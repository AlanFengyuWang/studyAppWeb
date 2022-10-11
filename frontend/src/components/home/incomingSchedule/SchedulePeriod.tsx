import {
  Box,
  Center,
  Flex,
  ResponsiveArray,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TaskFormValues } from "../../../types";
import { Theme } from "../../../styles/theme";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "../../tasks/TaskCard";
import { useIsDraggingContext } from "../../../context/IsDraggingContext";
import { Union } from "@chakra-ui/styled-system/dist/declarations/src/utils";
import { Property } from "csstype";
import IncomingSchedule from "./IncomingSchedule";
import IncomingTaskTimeFocus from "./IncomingTaskTimeFocus";

const SchedulePeriod = (props: {
  scheduledTasks: TaskFormValues[];
  mutate: Function;
  isDragging: boolean;
  showIncomingTaskTimeFocus: boolean;
  period: "morning" | "afternoon" | "evening";
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

  const imagePath = `/schedule/${props.period}.svg`;
  const alt = `picture of the ${props.period} schedule`;
  let widthHeight = 0;
  let droppableId: "column-2" | "column-3" | "column-4";
  let bgColor: string;
  switch (props.period) {
    case "morning":
      widthHeight = 50;
      droppableId = "column-2";
      bgColor = Theme.schedule.colors.morning;
      break;
    case "afternoon":
      widthHeight = 50;
      droppableId = "column-3";
      bgColor = Theme.schedule.colors.afternoon;
      break;
    case "evening":
      widthHeight = 36;
      droppableId = "column-4";
      bgColor = Theme.schedule.colors.evening;
      break;
  }

  //fix the animation of drag and drop
  if (!enabled) {
    return null;
  }

  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <Stack
          bgColor={bgColor}
          minHeight={Theme.schedule.schedulePeriodsMinHeight}
          borderRadius={Theme.schedule.borderRadius}
          opacity={props.isDragging ? "70%" : "100%"}
          ref={provided.innerRef}
          flexGrow={1}
          {...provided.droppableProps}
        >
          <Center>
            <Image
              src={imagePath}
              alt={alt}
              width={widthHeight}
              height={widthHeight}
            />
          </Center>
          {props.showIncomingTaskTimeFocus && <IncomingTaskTimeFocus />}
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
  );
};

export default SchedulePeriod;
