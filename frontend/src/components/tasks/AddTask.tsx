import React, { MouseEventHandler, useEffect } from "react";
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
import Subtask from "./Subtask";
import { useForm } from "react-hook-form";

type TSubtask = { title: string; description: string[] };

const AddTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  //useform
  const { register, handleSubmit } = useForm();
  const [description, setDescription] = React.useState<string>("");

  const [nSubtasks, setnSubtasks] = React.useState<number>(3);
  const [subTasks, setSubTasks] = React.useState<TSubtask[]>([]);

  const handleDescriptionInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    setDescription(inputValue);
  };

  const onSubmit = (data: any) => {
    console.log("data = " + data);
  };

  const updateSubTask = () => {
    // e.preventDefault();
  };

  const onClickDelFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("delting");
    alert("deleting");
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

            <FormControl mt={4}>
              <FormLabel marginBottom={0}>Subtasks</FormLabel>
              {[...Array(nSubtasks)].map((subtaskIndx, index) => (
                <Subtask
                  index={index}
                  key={index}
                  isLast={index == nSubtasks - 1}
                  onClickDelFunc={onClickDelFunc}
                  onSubmit={onSubmit}
                  register={register}
                />
              ))}
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
