import { KillOnSignal } from 'concurrently';
import { NextFunction, request, Request, Response } from 'express';
// import { DB } from '../database/connect';
import { CreateUserDto } from '../dtos/users.dto';
import { User } from '../interfaces/users.interface';
import userService from '../services/users.service';

class UsersController {
    public userService = new userService();

    public getUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const findAllUsersData: User[] = await this.userService.findAllUser();
    
          res.status(200).json({ data: findAllUsersData, message: 'findAll' });
        } catch (error) {
          next(error);
        }
      };

    public createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const userData: CreateUserDto = req.body;
        //   console.log("userData = " + JSON.stringify(userData));
          
          const createUserData: User = await this.userService.createUser(userData);
    
          res.status(201).json({ data: createUserData, message: 'created' });
        } catch (error) {
          next(error);
        }
      };
}

export default UsersController;