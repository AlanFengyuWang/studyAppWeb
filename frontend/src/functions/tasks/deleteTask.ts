import React from 'react'

export const deleteTask = (email:string, taskId: string) => {
    const data = {
        email: email,
    }
    const requestOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    console.log("Fetching");
    console.log("process.env.SERVERPORT + /task/delete/ + taskId = " +process.env.SERVERPORT + "/task/delete/" + taskId);
    
    fetch(process.env.SERVERPORT + "/task/delete/" + taskId, requestOptions);
}
