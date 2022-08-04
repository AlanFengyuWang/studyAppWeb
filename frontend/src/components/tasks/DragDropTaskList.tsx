import { Box, Flex } from "@chakra-ui/react";
import { Session } from "inspector";
import React, { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { TaskFormValues } from "../../types";
import IncomingSchedule from "../home/incomingSchedule/IncomingSchedule";
import TodayTaskList from "../home/TodayTaskList";
import TaskCard from "./TaskCard";

const DragDropTaskList = (props: {
  tasks: TaskFormValues[] | undefined;
  error: any;
  mutate: Function;
}) => {
  //drag styles
  const getListStyle = (isDraggingOver: any) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    flexDirection: "column",
  });

  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    // padding: grid * 2,
    // margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  //fix the issue of animation for drag and drop for react 18
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  console.log("before");

  if (!enabled) {
    return null;
  }

  //   if (props.tasks)
  //     console.log(
  //       "rendering drag and drop task list, props.data.tasks = " +
  //         props.data.tasks
  //     );

  return (
    <Droppable droppableId="droppable" isDropDisabled={false}>
      {(provided, snapshot) => (
        <Flex ref={provided.innerRef} style={{ flexDirection: "column" }}>
          {props.tasks &&
            props.tasks.map((task: any, index: number) => (
              <TaskCard task={task} key={task._id} index={index} />
            ))}
          {/* <IncomingSchedule data={props.data ? props.data.task : []} /> */}
          {provided.placeholder}
        </Flex>
      )}
    </Droppable>
  );
};

export default DragDropTaskList;
