import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { TaskFormValues } from "../../../types";
import Image from "next/image";

const EveningSchedule = (props: { scheduledTasks: TaskFormValues[] }) => {
  return (
    <Box bgColor="#718096">
      <Center>
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
