import React, { useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import DateTimePicker from "react-datetime-picker";

// import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import { AddIcon } from "@chakra-ui/icons";
import Subtask from "./Subtask";

const AddTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [description, setDescription] = React.useState<string>("");

  const [nSubtasks, setnSubtasks] = React.useState<number>(3);

  const handleDescriptionInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    setDescription(inputValue);
  };
  return (
    <>
      <Button colorScheme="teal" size="sm" onClick={onOpen}>
        Add Tasks
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>What is your next task?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Task name:</FormLabel>
              <Input ref={initialRef} placeholder="Task name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description:</FormLabel>
              <Textarea
                value={description}
                onChange={handleDescriptionInputChange}
                placeholder="My description of the task is.."
              />
            </FormControl>

            <FormControl mt={3}>
              <FormLabel htmlFor="type">Type:</FormLabel>
              <Select
                id="type"
                // placeholder="Select type"
                size="md"
                // color="gray"
              >
                <option>Work</option>
                <option>Exercise</option>
                <option>Entertainment</option>
                <option>Others</option>
              </Select>
            </FormControl>

            <FormControl mt={3}>
              {/* <FormLabel htmlFor="due">Due</FormLabel> */}
              {/* <Box w="100%" p={4} border="1px solid"> */}
              {/* <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
              /> */}
              {/* </Box> */}
              {/* <DateTimePicker onChange={setStartDate} value={startDate} /> */}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel marginBottom={0}>Subtasks</FormLabel>
              {[...Array(nSubtasks)].map((subtaskIndx, index) => (
                <Subtask
                  index={index}
                  key={index}
                  isLast={index == nSubtasks - 1}
                />
              ))}

              {/* <Box display="flex" justifyContent="right" width="100%" mb={2}>
                <ButtonGroup
                  variant="outline"
                  spacing="5"
                  size="sm"
                  marginTop="9px"
                >
                  <Button colorScheme="red">Remove</Button>
                </ButtonGroup> 
              </Box> */}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTask;
