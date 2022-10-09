import { loadDefaultErrorComponents } from "next/dist/server/load-components";
import { type } from "os";
import { TaskFormValues } from "../../types";
import { isAfternoon, isEvening, isMorning, isToday } from "../date/dateCheck";

export const getUnscheduledTasks = (listItems: TaskFormValues[]) => {
    return listItems.filter((task) => {
        if(task.due === null) {
            return task;
        }
    })
}

export const getMorningTasks = (listItems: TaskFormValues[]) => {
    return listItems.filter((task) => {
        if(task.due !== null && task.due !== undefined) {
            const due:Date = new Date(task.due);
            if(isToday(due) && isMorning(due)) {
                return task;
            }
        }
    })
}

export const getAfternoonTasks = (listItems: TaskFormValues[]) => {
    return listItems.filter((task) => {
        if(task.due !== null && task.due !== undefined) {
            const due:Date = new Date(task.due);
            if(isToday(due) && isAfternoon(due)) {
                return task;
            }
        }
    })
    
}

export const getEveningTasks = (listItems: TaskFormValues[]) => {
    return listItems.filter((task) => {
        if(task.due !== null && task.due !== undefined) {
            const due:Date = new Date(task.due);
            if(isToday(due) && isEvening(due)) {
                return task;
            }
        }
    })
}