import { json, NextFunction, request, Request, Response } from 'express';
// import { DB } from '../database/connect';
import { CreateUserDto } from '../dtos/users.dto';
import { User } from '../interfaces/users.interface';
import authService from '../services/auth.service';

class UsersController {
    public authService = new authService();

    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const userData: CreateUserDto = req.body;
          const isThirdParty: boolean = JSON.parse(req.query.isThirdParty as string);
          const createUserData: User = await this.authService.signUp(userData, isThirdParty);
          res.status(201).json({ data: createUserData, message: 'created' });
        } catch (error) {
          next(error);
        }
    };
}

export default UsersController;