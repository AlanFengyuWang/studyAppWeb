import React from 'react'
import { TaskFormValues } from '../../types'


export const addTask = (taskInfo: TaskFormValues & {email:string}) => {
    const data = {
    taskTitle: taskInfo.taskTitle, 
    taskDescription: taskInfo.taskDescription, 
    type: taskInfo.type, 
    email: taskInfo.email,
    due: taskInfo.due, 
    milestones: taskInfo.milestones, 
    subtask: taskInfo.subtask
    };

    const requestOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    return fetch(process.env.SERVERPORT + "/task/add/", requestOptions);
}
