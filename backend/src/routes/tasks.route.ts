import { Routes } from "../interfaces/routes.interface";
import {Router} from 'express';
import TaskController from '../controllers/tasks.controller';

class TaskRoute implements Routes {
    public path = "/tasks";  
    public router = Router();
    public taskController = new TaskController();
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(`${this.path}`, this.taskController.getTasks);
        this.router.post(`${this.path}`, this.taskController.createTask);
        this.router.put(`${this.path}/:id`, this.taskController.updateTask);
    }
}

export default TaskRoute;