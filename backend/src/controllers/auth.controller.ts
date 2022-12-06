import { json, NextFunction, request, Request, Response } from 'express';
// import { DB } from '../database/connect';
import { CreateUserDto, LoginDto } from '../dtos/users.dto';
import { RequestWithUser } from '../interfaces/auth.interface';
import { User } from '../interfaces/users.interface';
import authService from '../services/auth.service';

class UsersController {
    public authService = new authService();

    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const userData: CreateUserDto = req.body;
          console.log("req.query.isThirdParty = " + req.query.isThirdParty);
          
          const isThirdParty: boolean = JSON.parse(req.query.isThirdParty as string);
          const createUserData: User = await this.authService.signUp(userData, isThirdParty);
          res.status(201).json({ data: createUserData, message: 'created' });
        } catch (error) {
          next(error);
        }
    };

    public login = async(req: Request, res: Response, next: NextFunction) => {
      try {
        const signinInfo: LoginDto = req.body;
        const {cookie, findUser} = await this.authService.login(signinInfo);

        res.setHeader('Set-Cookie', [cookie]);
        res.status(200).json({ data:findUser, message: 'login' });
      } catch(err) {
        next(err);
      }
    }

    public logout = async(req:RequestWithUser, res:Response, next: NextFunction) => {
      try {
        const userData: User | undefined = req.user;
        const logOutUserData: User = await this.authService.logout(userData);

        res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
        res.status(200).json({ data: logOutUserData, message: 'logout'});
      } catch(err) {
        next(err);
      }
    }
}

export default UsersController;