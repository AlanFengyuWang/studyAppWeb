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
import { Droppable } from "react-beautiful-dnd";
import { mutate } from "swr";

const IncomingSchedule = (props: {
  morningScheduleTasks: TaskFormValues[];
  afternoonScheduleTasks: TaskFormValues[];
  eveningScheduleTasks: TaskFormValues[];
  mutate: Function;
}) => {
  // const { morningScheduleTasks, afternoonScheduleTasks, eveningScheduleTasks } =
  //   storeScheduleBasedOnPeriod(props.data);

  //intersection observer
  // const { ref, inView, entry } = useInView({
  //   rootMargin: "0px 0px -550px 0px", //this is because we have a nav bar in the bottom
  // });

  return (
    <Stack mt="35px">
      {/* <Text fontWeight="bold">My Incoming Schedule...</Text> */}
      <Box>
        <MorningSchedule
          scheduledTasks={props.morningScheduleTasks}
          mutate={mutate}
        />
      </Box>
      <Box>
        <AfternoonSchedule
          scheduledTasks={props.afternoonScheduleTasks}
          mutate={mutate}
        />
      </Box>
      <Box>
        <EveningSchedule
          scheduledTasks={props.eveningScheduleTasks}
          mutate={mutate}
        />
      </Box>
    </Stack>
  );
};

// function storeScheduleBasedOnPeriod(data: TaskFormValues[]) {
//   // displaying only the tasks TODAY based on morning, afternoon and evening
//   let morningScheduleTasks: TaskFormValues[] = [];
//   let afternoonScheduleTasks: TaskFormValues[] = [];
//   let eveningScheduleTasks: TaskFormValues[] = [];
//   data !== undefined &&
//     data.map((task) => {
//       //if there's a scheduled time, we arrange based on the starting and finishing time
//       //it means it will appear both in the morning and in afternoon if the starting time is in the morning and finishing time is in the afternoon
//       if (task.scheduledTime) {
//         let startingTime = new Date(task.scheduledTime.startingTime);
//         let endingTime = new Date(task.scheduledTime.endingTime);
//         if (isToday(startingTime)) {
//           if (isMorning(startingTime) || isMorning(endingTime)) {
//             morningScheduleTasks.push(task);
//           }

//           if (isAfternoon(startingTime) || isAfternoon(endingTime)) {
//             afternoonScheduleTasks.push(task);
//           }

//           if (isEvening(startingTime) || isEvening(endingTime)) {
//             eveningScheduleTasks.push(task);
//           }
//         }
//         //for the past unfinished tasks, we arrange to the morning
//         else if (beforeToday(startingTime) && !task.isDone) {
//           morningScheduleTasks.push(task);
//         }
//       } else {
//         //when it doesn't have a scheduled time
//       }
//     });
//   return {
//     morningScheduleTasks: morningScheduleTasks,
//     afternoonScheduleTasks: afternoonScheduleTasks,
//     eveningScheduleTasks: eveningScheduleTasks,
//   };
// }
export default IncomingSchedule;
