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
          const createUserData: User = await this.userService.createUser(userData);
          res.status(201).json({ data: createUserData, message: 'created' });
        } catch (error) {
          next(error);
        }
      };
    
    public getUserById = async(req: Request, res: Response, next: NextFunction) => {
      try {
        const userId: string = req.params.id;
        const findOneUserData: User = await this.userService.findUserById(userId);
        res.status(200).json({data: findOneUserData, message: 'Find One'});
      } catch (error) {
        next(error);
      }
    };

    public updateUser = async(req: Request, res: Response, next: NextFunction) => {
      try {
        const userId: string = req.params.id;
        const userData: CreateUserDto = req.body;
        const updateUserData: User = await this.userService.updateUser(userId, userData);
        console.log("updateUserData = " + JSON.stringify(updateUserData));
        res.status(200).json({data: updateUserData, message: 'Updated'});
      } catch(error) {
        next(error);
      }
    };
}

export default UsersController;