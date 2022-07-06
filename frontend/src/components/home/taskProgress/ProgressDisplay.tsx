import { Box } from "@chakra-ui/react";
import React from "react";
import ImageSlider from "../ImageSlider";
import { IProgress } from "../../../types";

const ProgressCards = () => {
  // TODO: Updating the data here, for now the data is static
  const slides: IProgress[] = [
    { timeType: "Today", progress: 10 },
    { timeType: "This week", progress: 50 },
    { timeType: "This month", progress: 80 },
  ];
  return (
    <div>
      <Box w="100%" p={4} color="white">
        <ImageSlider slides={slides} />
      </Box>
    </div>
  );
};

export default ProgressCards;
