import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { TaskFormValues } from "../../../types";

const MorningSchedule = (props: { scheduledTasks: TaskFormValues[] }) => {
  return (
    <Box bgColor="#FAF089">
      <Center>
        <Image
          src="/schedule/morning.svg"
          alt="picture of the morning schedule"
          width={50}
          height={50}
        />
      </Center>
    </Box>
  );
};

export default MorningSchedule;
