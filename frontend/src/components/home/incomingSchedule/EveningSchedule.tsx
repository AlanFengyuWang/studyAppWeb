import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { TaskFormValues } from "../../../types";
import Image from "next/image";
import { Theme } from "../../../styles/theme";

const EveningSchedule = (props: { scheduledTasks: TaskFormValues[] }) => {
  return (
    <Box
      bgColor={Theme.schedule.colors.evening}
      minHeight={Theme.schedule.schedulePeriodsHeight}
      borderRadius={Theme.schedule.borderRadius}
    >
      <Center paddingTop="4px">
        <Image
          src="/schedule/evening.svg"
          alt="picture of the evening schedule"
          width={36}
          height={36}
        />
      </Center>
    </Box>
  );
};

export default EveningSchedule;
