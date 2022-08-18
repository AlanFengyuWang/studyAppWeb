import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import RemoveButton from "../../components/home/buttons/RemoveButton";

const Subtask = (props: {
  index: number;
  register: any;
  isLast: boolean;
  append: (
    obj:
      | { title: string; description: string }
      | { title: string; description: string }[]
  ) => void;
  remove: (index?: number | number[]) => void;
}) => {
  return (
    <div>
      <FormControl isRequired>
        <FormLabel marginBottom={0} fontSize="md">
          Task {props.index + 1}:
        </FormLabel>
        <Input
          placeholder="Title"
          size="sm"
          fontSize="sm"
          {...props.register(`subtask.${props.index}.title` as const, {
            require: true,
          })}
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel marginBottom={0} fontSize="sm">
          Description:
        </FormLabel>
        <Textarea
          size="sm"
          placeholder="Remind my future self.."
          {...props.register(`subtask.${props.index}.description` as const)}
        />
      </FormControl>

      <RemoveButton index={props.index} remove={props.remove} />
    </div>
  );
};

export default Subtask;
