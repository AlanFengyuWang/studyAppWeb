import React from "react";
import { Text } from "@chakra-ui/react";
import TaskCard from "../tasks/TaskCard";
const currentTime = new Date();
const dailyTasks = [
  {
    type: "learning",
    title: "Finishing the chemistry ch2",
    due: { currentTime },
  },
  {
    type: "revision",
    title: "Revising the chemistry ch1",
    due: { currentTime },
  },
  {
    type: "revision",
    title: "Revising the chemistry ch1",
    contentLeft: 24,
    due: { currentTime },
  },
];

const TodayTaskList = () => {
  //get the tasks from localStorage
  if (typeof window != "undefined") {
    const tasks = window.localStorage.hasOwnProperty("tasks")
      ? window.localStorage.getItem("tasks")
      : "[]";

    // console.log("tasks = " + tasks);

    const tasksObject: Array<string | Object> = tasks
      ? [...JSON.parse(tasks)]
      : [];
    // console.log("tasksObject = " + JSON.stringify(tasksObject));

    // console.log("taskObject" + JSON.stringify(tasksObject));
    // window.localStorage.setItem("tasks", JSON.stringify(tasksObject));
    // // window.localStorage.setItem("tasks", "Tasksss");
    // // console.log(localStorage.tasks);
    // console.log(window.localStorage.getItem("tasks"));
    return (
      <>
        {tasksObject.map((task: string | Object) => (
          <TaskCard task={task} />
        ))}
      </>
    );
  }
  return <></>;
  // if (typeof window !== "undefined") {
  //   // localStorage.clear();
  //   // window.localStorage.hasOwnProperty("tasks")
  //   // const tasks = window.localStorage.hasOwnProperty("tasks")
  //   //   ? window.localStorage.getItem("tasks")
  //   //   : "[]";
  //   // const tasksObject: Array<string | Object> = tasks ? JSON.parse(tasks) : [];
  //   // console.log("taskObject" + JSON.stringify(tasksObject));
  //   // localStorage.setItem("tasks", JSON.stringify(tasksObject));
  //   return <>Hello</>;
  //   // return tasksObject.map((task: string | Object) => <>{task}</>);
  // } else {
  //   return <></>;
  // }
  return <></>;
};

export default TodayTaskList;
