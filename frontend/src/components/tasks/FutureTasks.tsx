import { Center, Stack } from "@chakra-ui/react";
import { isToday } from "date-fns";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { TaskFormValues, TaskType } from "../../types";
import TaskCard from "./TaskCard";

const FutureTasks = (props: { tasks: TaskFormValues[]; mutate: Function }) => {
  return (
    <Droppable droppableId="column-2">
      {(provided, snapshot) => (
        <Stack
          // bgColor={Theme.schedule.colors.morning}
          // minHeight={Theme.schedule.schedulePeriodsMinHeight}
          // borderRadius={Theme.schedule.borderRadius}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {props.tasks.map((task, index) => {
            if (task.due !== undefined && !isToday(new Date(task.due))) {
              return (
                <TaskCard
                  task={task}
                  key={task._id}
                  index={index}
                  mutate={props.mutate}
                />
              );
            }
          })}
          {provided.placeholder}
        </Stack>
      )}
    </Droppable>
  );
};

export default FutureTasks;
