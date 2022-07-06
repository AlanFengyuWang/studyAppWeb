import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import "react-datetime-picker/dist/DateTimePicker.css";
import RemoveButton from "./buttons/removeButton";

const Milestone = (props: {
  index: number;
  register: any;
  isLast: boolean;
  updateMilestones: (e: Date, index: number) => void;
  milestones: Date[];
  append: (obj: object | object[]) => void;
  remove: (index?: number | number[]) => void;
}) => {
  return (
    <div>
      <FormControl isRequired>
        <FormLabel marginBottom={0} fontSize="md">
          Milestone {props.index + 1}
        </FormLabel>
        <DateTimePicker
          key={props.index}
          onChange={(time: Date) => props.updateMilestones(time, props.index)}
          value={props.milestones[props.index]}
        />
      </FormControl>
      <Box display="flex" justifyContent="left" width="100%" mb={1}>
        <ButtonGroup spacing="3" size="xs" marginTop="5px">
          <Button colorScheme="red" onClick={() => props.remove(props.index)}>
            Remove
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Milestone;
