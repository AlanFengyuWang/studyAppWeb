import { isEmpty } from "../utils/utils";
import { ObjectId, UpdateResult } from "mongodb";
import { CreateTaskDto } from "../dtos/tasks.dto";
import { HttpException } from "../exceptions/HttpException";
import { Task } from "../interfaces/tasks.interface";
import userModel from "../models/users.model";
import { User } from "../interfaces/users.interface";

class TaskService {
    public users = userModel;
    public async getTasks(userId:string): Promise<Task[]> {
        let myquery = {_id: userId};
        const user: User[] = await this.users.find(myquery);
        const task: Task[] = user[0].tasks;
        return task;
    }

    public async getTask(userId:string, taskId: string): Promise<Task[]> {
        const user = await this.users.find({_id: userId, "tasks._id": taskId}, "tasks.$");
        if(user.length == 0) throw new HttpException(404, "Task does not exist");
        const task: Task[] = user[0].tasks;
        return task;
    }

    public async createTask(userId: string, taskData: CreateTaskDto): Promise<UpdateResult> {
        if(isEmpty(taskData)) throw new HttpException(400, "Input task data is empty");
        const createTaskData: UpdateResult = await this.users.updateOne({_id: userId}, {$push: {tasks: {...taskData}}}, {upsert:true, runValidators:true});
        return createTaskData;
    }

    public async updateTask(userId: string, taskId: string, newTaskData:CreateTaskDto): Promise<Task>{
        if(isEmpty(newTaskData)) throw new HttpException(400, "Input task data is empty");
        
        const oldTask = await this.getTask(userId, taskId);
        if(!oldTask) {
            throw new HttpException(404, "Task does not exist");
        }
        const newTask = {...oldTask, ...newTaskData};
        const updatedTask: Task | null = await this.users.findOneAndUpdate({_id: userId,'tasks._id': taskId}, {$set: {"tasks.$": newTask} }, {new:true});
        if(!updatedTask) throw new HttpException(404, "Task or User doesn't exist");
        return updatedTask;
    }

    public async deleteTask(userId: string, taskId: string): Promise<Task>{
        const updatedTask: Task | null = await this.users.findOneAndUpdate({_id: userId}, {$pull: {'tasks': {_id:taskId}} }, {new:true});
        if(!updatedTask) throw new HttpException(404, "Task or User doesn't exist");
        return updatedTask;
    }
}

export default TaskService;