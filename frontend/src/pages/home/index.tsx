import React, { StrictMode, useEffect, useState } from "react";
import Profile from "../../components/home/Profile";
import ProgressCards from "../../components/home/taskProgress/ProgressDisplay";
import TodayTaskList from "../../components/home/TodayTaskList";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import AddTask from "../../components/tasks/AddTask";
import { useEmailContext } from "../../context/EmailContext";
import useSWR from "swr";
import IncomingSchedule from "../../components/home/incomingSchedule/IncomingSchedule";
import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  Droppable,
  DropResult,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import { TaskFormValues, TaskType } from "../../types";
import {
  getAfternoonTasks,
  getEveningTasks,
  getMorningTasks,
  getUnscheduledTasks,
} from "../../functions/tasks/getTasks";

const HomePage = () => {
  //declare types
  type ColumnsKeyType = "column-1" | "column-2" | "column-3" | "column-4";
  type ColumnTitleType =
    | "Not scheduled"
    | "Morning schedule"
    | "Afternoon schedule"
    | "Evening schedule";
  type ColumnsType = {
    [columnKey in ColumnsKeyType]: {
      id: ColumnsKeyType;
      title: ColumnTitleType;
      tasks: TaskFormValues[];
    };
  };
  type InitialDataType = { columns: ColumnsType };

  //using useContext to set email after logged in
  const { data: session } = useSession();
  const { setEmail } = useEmailContext();
  useEffect(() => {
    setEmail(
      session && session.user && session.user.email ? session.user.email : ""
    );
  }, []);

  const { email } = useEmailContext();

  //fetch data
  const SHOW_TASK_URL = process.env.GET_TASKS_URL + email;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, mutate } = useSWR(SHOW_TASK_URL, fetcher);

  //initial data initialization
  const [initialData, setInitialData] = useState<InitialDataType>({
    columns: {
      "column-1": {
        id: "column-1",
        title: "Not scheduled",
        tasks: [],
      },
      "column-2": {
        id: "column-2",
        title: "Morning schedule",
        tasks: [],
      },
      "column-3": {
        id: "column-3",
        title: "Afternoon schedule",
        tasks: [],
      },
      "column-4": {
        id: "column-4",
        title: "Evening schedule",
        tasks: [],
      },
    },
  });

  useEffect(() => {
    if (data && data.tasks) {
      setInitialData((current) => {
        return {
          ...current,
          columns: {
            ...current.columns,
            "column-1": {
              ...current.columns["column-1"],
              tasks: getUnscheduledTasks(data.tasks),
            },
            "column-2": {
              ...current.columns["column-2"],
              tasks: getMorningTasks(data.tasks),
            },
            "column-3": {
              ...current.columns["column-3"],
              tasks: getAfternoonTasks(data.tasks),
            },
            "column-4": {
              ...current.columns["column-4"],
              tasks: getEveningTasks(data.tasks),
            },
          },
        };
      });
    }
  }, [data]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = initialData.columns[source.droppableId as ColumnsKeyType]; //here start is the list of all tasks in the starter column
    const finish =
      initialData.columns[destination.droppableId as ColumnsKeyType];

    //when the drag and drop in the same column
    if (start === finish) {
      const newTaskList = Array.from(start.tasks);
      const [removed] = newTaskList.splice(source.index, 1);
      newTaskList.splice(destination.index, 0, removed);

      //update column
      setInitialData((current) => {
        return {
          ...current,
          columns: {
            ...current.columns,
            [destination.droppableId]: {
              ...current.columns[destination.droppableId as ColumnsKeyType],
              tasks: newTaskList,
            },
          },
        };
      });
      return;
    }

    //when the drag and drop is in the diff column
    //update the start task list
    const startTaskList = Array.from(start.tasks);
    const [removed] = startTaskList.splice(source.index, 1);
    const newStart = {
      ...start,
      tasks: startTaskList,
    };

    //update the finished task list
    const finishTaskList = Array.from(finish.tasks);
    finishTaskList.splice(destination.index, 0, removed);
    const newFinish = {
      ...finish,
      tasks: finishTaskList,
    };

    //update the initial data
    const newInitialData = {
      ...initialData,
      columns: {
        ...initialData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setInitialData(newInitialData);
  };

    //isdragging
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [isScheduled, setisScheduled] = useState<boolean>(false);

  return (
    <Box marginBottom="30%">
      <Profile />
      <ProgressCards />
      <Box style={{ width: "90%", margin: "0 auto" }}>
        <Text fontSize="1xl" fontWeight={600}>
          What do I need to do today?
        </Text>
        <AddTask mutate={mutate} />
        <DragDropContext onDragEnd={onDragEnd}>
          <TodayTaskList
            tasks={
              initialData.columns["column-1"].tasks
                ? initialData.columns["column-1"].tasks
                : []
            }
            error={error}
            mutate={mutate}
            isDragging={isDragging}
            setIsDragging={() => {}}
            setisScheduled={() => {}}
            isScheduled={isScheduled}
          />
          <IncomingSchedule
            morningScheduleTasks={
              initialData.columns["column-2"].tasks
                ? initialData.columns["column-2"].tasks
                : []
            }
            afternoonScheduleTasks={
              initialData.columns["column-3"].tasks
                ? initialData.columns["column-3"].tasks
                : []
            }
            eveningScheduleTasks={
              initialData.columns["column-4"].tasks
                ? initialData.columns["column-4"].tasks
                : []
            }
            mutate={mutate}
            setisScheduled={setisScheduled}
            // isDragging={isDragging}
            setIsDragging={setIsDragging}
          />
        </DragDropContext>
      </Box>
    </Box>
  );
};

HomePage.auth = true;

export default HomePage;
