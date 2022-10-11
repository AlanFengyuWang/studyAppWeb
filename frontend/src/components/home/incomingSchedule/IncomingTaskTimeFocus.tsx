import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MouseEventHandler, useEffect, useState } from "react";
//@ts-ignore
import TimePicker from "react-time-picker/dist/entry.nostyle";
import "react-time-picker/dist/TimePicker.css";
// import "react-clock/dist/Clock.css";
// import TimePicker from 'react-time-picker/dist/entry.nostyle';

const IncomingTaskTimeFocus = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //automatically open the modal
  useEffect(() => {
    onOpen();
  }, []);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const currDate = new Date();
  //   const currTime = Date.parse(currDate.toLocaleTimeString);
  const [time, onChangeTime] = useState<Date>(new Date());

  const submit = () => {
    console.log("timeInput = " + time);
  };

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>What time do I want to start?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center padding="15px">
              <TimePicker onChange={onChangeTime} value={time} disableClock />
            </Center>
            {/* <FormControl>
              <Input ref={initialRef} placeholder="time" />
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={submit}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IncomingTaskTimeFocus;
