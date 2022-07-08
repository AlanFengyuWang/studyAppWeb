import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { TaskFormValues } from "../../../types";
import Image from "next/image";
import { Theme } from "../../../styles/theme";

const AfternoonSchedule = (props: { scheduledTasks: TaskFormValues[] }) => {
  return (
    <Box
      bgColor={Theme.schedule.colors.afternoon}
      minHeight={Theme.schedule.schedulePeriodsHeight}
      borderRadius={Theme.schedule.borderRadius}
    >
      <Center>
        <Image
          src="/schedule/afternoon.svg"
          alt="picture of the morning schedule"
          width={50}
          height={50}
        />
      </Center>
    </Box>
  );
};

export default AfternoonSchedule;
