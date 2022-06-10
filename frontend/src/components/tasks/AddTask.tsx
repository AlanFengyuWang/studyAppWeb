import React, { useRef, useEffect } from "react";
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
import { useForm, useFieldArray } from "react-hook-form";

type TaskType = "Work" | "Exercise" | "Entertainment" | "Others" | "Study";
type FormValues = {
  taskTitle: string;
  taskDescription: string;
  type: TaskType;
  subtask: { title: string; description: string }[];
};

const AddTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  //useFieldAray
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { subtask: [{ title: "", description: "" }] },
    mode: "onBlur",
  });
  const { fields, append, remove } = useFieldArray({
    name: "subtask",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log("Hello");
    console.log(data);
  };

  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;

  return (
    <>
      <Button colorScheme="teal" size="sm" onClick={onOpen}>
        Add Tasks
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>What is your next task?</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Task name:</FormLabel>
                <Input
                  placeholder="Task name"
                  {...register("taskTitle" as const)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description:</FormLabel>
                <Textarea
                  {...register("taskDescription" as const)}
                  placeholder="My description of the task is.."
                />
              </FormControl>

              <FormControl mt={3}>
                <FormLabel htmlFor="type">Type:</FormLabel>
                <Select id="type" color="gray" {...register("type" as const)}>
                  <option>Work</option>
                  <option>Study</option>
                  <option>Exercise</option>
                  <option>Entertainment</option>
                  <option>Others</option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel marginBottom={0}>Subtasks</FormLabel>
                {fields.map((field, index) => (
                  <Subtask
                    index={index}
                    key={index}
                    isLast={fields.length === index + 1}
                    register={register}
                    append={append}
                    remove={remove}
                  />
                ))}
                <Button
                  colorScheme="green"
                  size="xs"
                  width="60px"
                  variant="outline"
                  marginLeft="40%"
                  pos="relative"
                  bottom={fields.length !== 0 ? "28.5px" : "0"}
                  onClick={() => append({ title: "", description: "" })}
                >
                  Add
                </Button>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default AddTask;
