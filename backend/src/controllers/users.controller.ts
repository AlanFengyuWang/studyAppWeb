import { KillOnSignal } from 'concurrently';
import { json, NextFunction, request, Request, Response } from 'express';
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
        const userId = req.query.userId as string;
        const userData: CreateUserDto = req.body;
        
        const updateUserData: User = await this.userService.updateUser(userId, userData);
        console.log("updateUserData = " + JSON.stringify(updateUserData));
        res.status(200).json({data: updateUserData, message: 'Updated'});
      } catch(error) {
        next(error);
      }
    };

    public deleteUser = async(req: Request, res: Response, next: NextFunction) => {
      try {
        const userId:string = req.params.id;
        const deleteUserData: User = await this.userService.deleteUser(userId); 
        res.status(200).json({data: deleteUserData, message: 'deleted'});
      } catch(err) {
        next(err);
      }
    }

    public getUserByEmail = async(req: Request, res: Response, next: NextFunction) => {
      try {
        const userId:string = req.params.email;
        console.log("userId = " + userId);
        
        const userData: User = await this.userService.getUserByEmail(userId); 
        res.status(200).json({data: userData, message: 'Find One'});
      } catch(err) {
        next(err);
      }
    }
}

export default UsersController;