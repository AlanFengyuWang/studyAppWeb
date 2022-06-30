import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

const RemoveButton = (props: {
  index: number;
  remove: (index?: number | number[]) => void;
}) => {
  return (
    <Box display="flex" justifyContent="right" width="100%" mb={1}>
      <ButtonGroup spacing="3" size="xs" marginTop="5px">
        <Button colorScheme="red" onClick={() => props.remove(props.index)}>
          Remove
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default RemoveButton;
