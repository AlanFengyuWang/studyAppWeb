import React from "react";
import { Text } from "@chakra-ui/react";
import TaskCard from "../tasks/TaskCard";

const TodayTaskList = () => {
  //get the tasks from localStorage
  // if (typeof window != "undefined") {
  //   const tasks = window.localStorage.hasOwnProperty("tasks")
  //     ? window.localStorage.getItem("tasks")
  //     : "[]";

  //   const tasksObject: Array<string | Object> = tasks
  //     ? [...JSON.parse(tasks)]
  //     : [];

  return (
    <>
      {/* {tasksObject.map((task: string | Object, index) => (
          <TaskCard task={task} key={index} />
        ))} */}
    </>
  );
};

export default TodayTaskList;
