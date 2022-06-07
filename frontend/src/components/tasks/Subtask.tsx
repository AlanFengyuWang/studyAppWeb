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

const Subtask = (props: { index: number; isLast: boolean }) => {
  let [description, setDescription] = React.useState<string>("");
  let handleDescriptionInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let inputValue = e.target.value;
    setDescription(inputValue);
  };
  return (
    <div>
      <FormControl isRequired>
        {/* <Text>Task {props.index}</Text> */}
        <FormLabel marginBottom={0} fontSize="md">
          Task {props.index + 1}:
        </FormLabel>
        <Input placeholder="Title" size="sm" fontSize="sm" />
      </FormControl>

      <FormControl mt={2}>
        <FormLabel marginBottom={0} fontSize="sm">
          Description:
        </FormLabel>
        <Textarea
          value={description}
          size="sm"
          onChange={handleDescriptionInputChange}
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
          <Button colorScheme="red">Remove</Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Subtask;
