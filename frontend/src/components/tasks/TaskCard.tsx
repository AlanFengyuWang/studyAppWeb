import { Box, Stack, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";

const TaskCard = ({ task }: { task: string | Object }) => {
  //deciding the background color: red means its urgent, oragne means it's moderate urgent, green means it's not urgent

  return (
    <></>
    // <Stack
    //   divider={<StackDivider borderColor="gray.200" />}
    //   spacing={4}
    //   align="stretch"
    //   background="red"
    // >
    //   {/* <Box></Box> */}
    // </Stack>
  );
};

export default TaskCard;
