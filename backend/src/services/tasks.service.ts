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

    public async createTask(userId: string, taskData: CreateTaskDto): Promise<UpdateResult> {
        if(isEmpty(taskData)) throw new HttpException(400, "Input task data is empty");
        
        const createTaskData: UpdateResult = await this.users.updateOne({_id: userId}, {$push: {tasks: {...taskData}}}, {upsert:true, runValidators:true});
        return createTaskData;
    }

    public async updateTask(userId: string, taskId: string, newTaskData:CreateTaskDto): Promise<UpdateResult>{
        console.log("userId = " + userId + ",taskId = " + taskId);
        if(!userId.match(/^[0-9a-fA-F]{24}$/)) {
            console.log("userId = " + userId + " is wrong");
        }
        
        if(isEmpty(newTaskData)) throw new HttpException(400, "Input task data is empty");

        const newUserData = {email:"newEmail",password:"newPassword",image:"newImage",accountTimeCreated:"newTime",tasks:[]};
        const updatedTask: UpdateResult | null = await this.users.findOneAndUpdate({_id: new ObjectId(userId)}, {$set:newUserData}, {new:true});
        if(!updatedTask) throw new HttpException(409, "Task doesn't exist");
        return updatedTask;
    }
}

export default TaskService;