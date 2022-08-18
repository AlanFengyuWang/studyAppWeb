import React, { useContext, useState } from "react";
import { TaskFormValues, TaskType } from "../types";

type SetValue = (value: TaskFormValues[]) => void;

interface TaskContextInterface {
  tasks: TaskFormValues[];
  mutate: Function;
  setMutate: Function;
  setTasks: SetValue;
}

export const useEmailContext = () => {
  return useContext(TasksContext);
};

const TasksContext = React.createContext<TaskContextInterface>({
  tasks: [],
  mutate: () => {},
  setMutate: () => {},
  setTasks: () => {},
});

const TasksProvider = (props: {children: React.ReactNode}) => {
    const [tasks, setTasks] = React.useState<TaskFormValues[]>([]);
    const [mutate, setMutate] = React.useState<Function>(() => {});

    return (
        <TasksContext.Provider value={{tasks, mutate, setMutate, setTasks}}>
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksProvider;
