import React from "react";
import { Text } from "@chakra-ui/react";
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
  return <div></div>;
};

export default TodayTaskList;
