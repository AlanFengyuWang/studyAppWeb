import { NextFunction, Router } from "express";
import AuthController from "../controllers/auth.controller";
import { CreateUserDto, IsThirdPartyDto } from "../dtos/users.dto";
import { Routes } from "../interfaces/routes.interface";
import validationMiddleware from "../middlewares/validation.middleware";

class AuthRoute implements Routes {
    public path = '/';
    public router = Router();
    public authController = new AuthController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}signup`, [validationMiddleware(CreateUserDto, 'body'), validationMiddleware(IsThirdPartyDto, 'query')], this.authController.signUp);
        // this.router.post(`${this.path}`, [validationMiddleware(CreateUserDto, 'body')], this.authController.signUp);
    }
}

export default AuthRoute;