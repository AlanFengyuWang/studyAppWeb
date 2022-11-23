import { NextFunction, RequestHandler, Router } from "express";
import AuthController from "../controllers/auth.controller";
import { CreateUserDto, IsThirdPartyDto, LoginDto } from "../dtos/users.dto";
import { Routes } from "../interfaces/routes.interface";
import authMiddleware from "../middlewares/auth.middleware";
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
        this.router.post(`${this.path}login`, validationMiddleware(LoginDto, 'body'), this.authController.login);
        this.router.post(`${this.path}logout`, authMiddleware as any, this.authController.logout as any);
    }
}

export default AuthRoute;