import { Routes } from "../interfaces/routes.interface";
import {Router} from 'express';
import TaskController from '../controllers/tasks.controller';
import validationMiddleware from "../middlewares/validation.middleware";
import { CreateTaskDto } from "../dtos/tasks.dto";

class TaskRoute implements Routes {
    public path = "/tasks";  
    public router = Router();
    public taskController = new TaskController();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.post(`${this.path}`, validationMiddleware(CreateTaskDto, 'body'), this.taskController.createTask);
        this.router.get(`${this.path}`, this.taskController.getTasks);
        this.router.get(`${this.path}/:id`, this.taskController.getTask);
        this.router.put(`${this.path}/:id`, this.taskController.updateTask);
        this.router.delete(`${this.path}/:id`, this.taskController.deleteTask);
    }
}

export default TaskRoute;