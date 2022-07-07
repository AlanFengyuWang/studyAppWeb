import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { TaskFormValues } from "../../../types";
import Image from "next/image";

const AfternoonSchedule = (props: { scheduledTasks: TaskFormValues[] }) => {
  return (
    <Box bgColor="#F6AD55">
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
