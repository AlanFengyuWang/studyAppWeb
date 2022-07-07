import React, { useEffect, useState } from "react";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
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
  Text,
} from "@chakra-ui/react";
import Subtask from "./Subtask";
import { useForm, useFieldArray } from "react-hook-form";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
// import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { TaskFormValues } from "../../types";
import Milestone from "../home/Milestone";
import { buttonAddStyle } from "../../styles/home/styledComponents";
import { addTask } from "../../functions/tasks/addTask";
import { useEmailContext } from "../../context/EmailContext";
import { Theme } from "../../styles/theme";

const AddTask = (props: { url: string; mutate: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [dateTime, setDateTime] = useState<Date>();
  const [milestonesState, setMilestonesState] = useState<Date[]>([]);

  //set default date
  const noDueDate = new Date();
  noDueDate.setDate(noDueDate.getDate() + 99999);

  //get email
  const { email } = useEmailContext();

  //useFieldAray
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormValues>({
    defaultValues: {
      _id: "UNIQUE COUNT DOCUMENT IDENTIFIER",
      taskTitle: "",
      taskDescription: "",
      type: "Others",
      due: noDueDate,
      scheduleTime: [],
      milestones: [],
      subtask: [],
    },
    mode: "onBlur",
  });
  const {
    fields: subtask,
    append: subtaskAppend,
    remove: subtaskRemove,
  } = useFieldArray({
    name: "subtask",
    control,
  });

  const {
    fields: milestones,
    append: milestonesAppend,
    remove: milestonesRemove,
  } = useFieldArray({
    name: "milestones",
    control,
  });

  const onSubmit = (data: TaskFormValues) => {
    let dataWithEmail: any = data;
    dataWithEmail["email"] = email;
    //update tasks to the component immediatelly
    addTask(dataWithEmail).then(() => {
      props.mutate();
    });

    /**
     * ===========Local storage START==========
     */
    //store to the localstorage
    // const tasks = window.localStorage.hasOwnProperty("tasks")
    //   ? window.localStorage.getItem("tasks")
    //   : "[]";
    // let newTasks: Array<string | Object> = tasks ? JSON.parse(tasks) : [];
    // newTasks.push(data);
    // window.localStorage.setItem("tasks", JSON.stringify(newTasks));
    /**
     * ===========Local storage END==========
     */
  };

  const updateMilestones = (time: Date, index: number) => {
    const newState = [...milestonesState];
    newState[index] = time;
    setMilestonesState(newState);
  };

  const onClickMilestoneAdd = () => {
    milestonesAppend({ milestone: new Date() });
    setMilestonesState([...milestonesState, new Date()]);
  };

  useEffect(() => {
    if (dateTime == undefined) {
      setValue("due", noDueDate);
    } else {
      setValue("due", dateTime);
    }
  }, [dateTime]);

  // if (fetchtaskDataError)
  //   return (
  //     <Alert status="error" marginTop="3%" padding="12px">
  //       <AlertIcon />
  //       <Text fontSize="sm">Failed to fetch your new tasks</Text>
  //     </Alert>
  //   );

  return (
    <Center>
      <Button
        colorScheme={Theme.colors.task.add}
        size="sm"
        onClick={onOpen}
        width="50%"
      >
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

              <FormControl mt={3}>
                <FormLabel htmlFor="due">Due:</FormLabel>
                <DateTimePicker onChange={setDateTime} value={dateTime} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel htmlFor="milestones">Milestones:</FormLabel>
                {milestones.map((milestone, index) => (
                  <Milestone
                    index={index}
                    key={index}
                    isLast={subtask.length === index + 1}
                    register={register}
                    milestones={milestonesState}
                    updateMilestones={updateMilestones}
                    append={milestonesAppend}
                    remove={milestonesRemove}
                  />
                ))}
                {milestones.length < 3 && (
                  <Button
                    {...buttonAddStyle}
                    bottom={milestones.length !== 0 ? "28.5px" : "0"}
                    onClick={onClickMilestoneAdd}
                  >
                    Add
                  </Button>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel marginBottom={0}>Subtasks</FormLabel>
                {subtask.map((field, index) => (
                  <Subtask
                    index={index}
                    key={index}
                    isLast={subtask.length === index + 1}
                    register={register}
                    append={subtaskAppend}
                    remove={subtaskRemove}
                  />
                ))}
                <Button
                  {...buttonAddStyle}
                  bottom={subtask.length !== 0 ? "28.5px" : "0"}
                  onClick={() => subtaskAppend({ title: "", description: "" })}
                >
                  Add
                </Button>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </Center>
  );
};

export default AddTask;
