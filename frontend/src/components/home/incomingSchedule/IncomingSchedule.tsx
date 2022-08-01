import React from "react";
import AfternoonSchedule from "./AfternoonSchedule";
import EveningSchedule from "./EveningSchedule";
import MorningSchedule from "./MorningSchedule";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { TaskFormValues } from "../../../types";
import {
  beforeToday,
  isAfternoon,
  isEvening,
  isMorning,
  isToday,
} from "../../../functions/date/dateCheck";
import { useInView } from "react-intersection-observer";
import { Theme } from "../../../styles/theme";

const IncomingSchedule = (props: { data: TaskFormValues[] }) => {
  const { morningScheduleTasks, afternoonScheduleTasks, eveningScheduleTasks } =
    storeScheduleBasedOnPeriod(props.data);

  //intersection observer
  const { ref, inView, entry } = useInView({
    rootMargin: "0px 0px -550px 0px", //this is because we have a nav bar in the bottom
  });

  // console.log("inview = " + inView);

  return (
    <Stack mt="35px" ref={ref}>
      {/* <Text fontWeight="bold">My Incoming Schedule...</Text> */}
      <Box>
        <MorningSchedule scheduledTasks={morningScheduleTasks} />
      </Box>
      <Box>
        <AfternoonSchedule scheduledTasks={afternoonScheduleTasks} />
      </Box>
      <Box>
        <EveningSchedule scheduledTasks={eveningScheduleTasks} />
      </Box>
    </Stack>
  );
};

function storeScheduleBasedOnPeriod(data: TaskFormValues[]) {
  // displaying only the tasks TODAY based on morning, afternoon and evening
  let morningScheduleTasks: TaskFormValues[] = [];
  let afternoonScheduleTasks: TaskFormValues[] = [];
  let eveningScheduleTasks: TaskFormValues[] = [];
  data !== undefined &&
    data.map((task) => {
      if (task.scheduleTime.length !== 0) {
        let hasScheduled = false;
        switch (task.scheduleTime[0].startingTime) {
          case "Morning":
            morningScheduleTasks.push(task);
            hasScheduled = true;
            break;
          case "Afternoon":
            afternoonScheduleTasks.push(task);
            hasScheduled = true;
            break;
          case "Evening":
            eveningScheduleTasks.push(task);
            hasScheduled = true;
            break;
        }
        if (!hasScheduled) {
          let startingTime = new Date(task.scheduleTime[0].startingTime);
          if (beforeToday(startingTime) || isToday(startingTime)) {
            //All tasks before today will be scheduled to today morning
            if (beforeToday(startingTime) || isMorning(startingTime)) {
              morningScheduleTasks.push(task);
            } else if (isAfternoon(startingTime)) {
              afternoonScheduleTasks.push(task);
            } else if (isEvening(startingTime)) {
              eveningScheduleTasks.push(task);
            }
          }
        }
      }
    });
  return {
    morningScheduleTasks: morningScheduleTasks,
    afternoonScheduleTasks: afternoonScheduleTasks,
    eveningScheduleTasks: eveningScheduleTasks,
  };
}
export default IncomingSchedule;
