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
import Dnd from "../../components/dndExample/Dnd";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { TaskFormValues, TaskType } from "../../types";
import TaskCard from "../../components/tasks/TaskCard";
import { json } from "stream/consumers";
import {
  getAfternoonTasks,
  getEveningTasks,
  getMorningTasks,
  getUnscheduledTasks,
} from "../../functions/tasks/getTasks";
import FutureTasks from "../../components/tasks/FutureTasks";

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
  // type InitialDataType = { tasks: TaskFormValues[]; columns: ColumnsType };
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

  //drag and drop
  // const [listItems, setItems] = useState<TaskFormValues[]>([]);
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
      // if (data !== undefined) console.log("data = " + data.tasks.length);
      // if (data !== undefined) console.log("data = " + data.tasks[0]);
    }
  }, [data]);

  // useEffect(() => {
  //   console.log("initialData = " + JSON.stringify(initialData.columns));
  // }, [initialData]);

  // const [columns, setColumns] = useState<ColumnsType>(initialData.columns);

  // const reorder = (
  //   list: TaskFormValues[] | undefined,
  //   startIndex: number,
  //   endIndex: number
  // ) => {
  //   if (list == undefined) return [];
  //   const result = Array.from(list);
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);
  //   return result;
  // };

  // const onDragEnd = (result: DropResult) => {
  //   // dropped outside the list
  //   if (!result.destination) {
  //     return;
  //   }
  //   const items = reorder(
  //     listItems,
  //     result.source.index,
  //     result.destination.index
  //   );
  //   if (items) setItems(items);
  // };

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
    console.log("source.droppableId = " + source.droppableId); //here droppableId is column id

    const start = initialData.columns[source.droppableId as ColumnsKeyType]; //here start is the list of all tasks in the starter column
    const finish =
      initialData.columns[destination.droppableId as ColumnsKeyType];

    // console.log("start = " + JSON.stringify(start.tasks));
    // console.log("finish = " + JSON.stringify(finish.tasks));

    //when the drag and drop in the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.tasks);
      const [removed] = newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, removed);

      console.log("newTaskIds = " + JSON.stringify(newTaskIds));

      //update column
      setInitialData((current) => {
        return {
          ...current,
          columns: {
            ...current.columns,
            [destination.droppableId]: {
              ...current.columns[destination.droppableId as ColumnsKeyType],
              tasks: newTaskIds
            },
          },
        };
      });
      return;
    }

    //when the drag and drop is in the diff column
    // const startTasks
  };

  useEffect(() => {
    console.log(
      "---->initialData = " + JSON.stringify(initialData.columns["column-1"])
    );
  }, [initialData]);

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
          />

          {/* <FutureTasks tasks={data ? data.tasks : []} mutate={mutate} /> */}
        </DragDropContext>
      </Box>
    </Box>
  );
};

HomePage.auth = true;

export default HomePage;
