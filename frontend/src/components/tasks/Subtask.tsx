import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";

type EventHandlerFuncType = (e: React.MouseEvent<HTMLButtonElement>) => void;

const Subtask = (props: {
  index: number;
  register: any;
  isLast: boolean;
  append: (obj: object | object[]) => void;
  remove: (index?: number | number[]) => void;
}) => {
  return (
    <div>
      <FormControl isRequired>
        {/* <Text>Task {props.index}</Text> */}
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

      <Box display="flex" justifyContent="right" width="100%" mb={1}>
        <ButtonGroup spacing="3" size="xs" marginTop="5px">
          <Button colorScheme="red" onClick={() => props.remove(props.index)}>
            Remove
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Subtask;
