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
  isLast: boolean;
  onClickDelFunc: EventHandlerFuncType;
  onSubmit: Function;
  register: (name: string, RegisterOptions?);
}) => {
  //   const [subTaskTitle, setSubTaskTitle] = React.useState<string>("");
  //   const [description, setDescription] = React.useState<string>("");

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
          value={subTaskTitle}
          onChange={(e) => setSubTaskTitle(e.target.value)}
        />
      </FormControl>

      <FormControl mt={2}>
        <FormLabel marginBottom={0} fontSize="sm">
          Description:
        </FormLabel>
        <Textarea
          value={description}
          size="sm"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Remind my future self.."
        />
      </FormControl>

      <Box display="flex" justifyContent="right" width="100%" mb={1}>
        <ButtonGroup spacing="3" size="xs" marginTop="5px">
          {props.isLast && (
            <Button colorScheme="green" width="60px" variant="outline">
              Add
            </Button>
          )}
          <Button colorScheme="red" onClick={props.onClickDelFunc}>
            Remove
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Subtask;
