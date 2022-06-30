import React from 'react'
import { FormValues } from '../../types'


export const addTask = (taskInfo: FormValues) => {
    const data = {
    taskTitle: taskInfo.taskTitle, 
    taskDescription: taskInfo.taskDescription, 
    type: taskInfo.type, 
    due: taskInfo.due, 
    milestones: taskInfo.milestones, 
    subtask: taskInfo.subtask
    };

    const requestOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    fetch(process.env.SERVERPORT + "/task/add/", requestOptions);
}
