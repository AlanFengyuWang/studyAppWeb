import { json } from "body-parser";
import { NextFunction, Request, Response } from "express";
import { CreateTaskDto } from "../dtos/tasks.dto";
import { Task } from "../interfaces/tasks.interface";
import TaskService from "../services/tasks.service";


class TaskController {
    public taskService = new TaskService();
    public getTasks = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.query.userId as string;
            const tasks: Task[] = await this.taskService.getTasks(userId);
            res.status(200).json({data: tasks, message:"findAll"});
        } catch(err) {
            next(err);
        }
    }

    public createTask = async(req: Request, res: Response, next:NextFunction) => {
        try {
            const userId = req.query.userId as string;
            const taskData: CreateTaskDto = req.body;
            const update = await this.taskService.createTask(userId, taskData);
            res.status(200).json({data: update, message: "Created Successfully"});
        } catch(err) {
            next(err);
        }
    }

    public updateTask = async(req: Request, res: Response, next: NextFunction) => {
        try {
           const taskId: string = req.params.id;
           const userId =  req.query.userId as string;
           const taskData: CreateTaskDto = req.body;
           const task = await this.taskService.updateTask(userId, taskId, taskData); 
           res.status(200).json({data: task, message: "updated successfully"});
        } catch(err) {
            next(err);
        }
    }
  
}

export default TaskController;
