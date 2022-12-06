import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../confg";
import { CreateUserDto, LoginDto } from "../dtos/users.dto";
import { HttpException } from "../exceptions/HttpException";
import { DataStoredInToken, TokenData } from "../interfaces/auth.interface";
import { User } from "../interfaces/users.interface";
import userModel from "../models/users.model";
import { isEmpty } from "../utils/utils";

class AuthService {
    public users = userModel;
    
    public async signUp(userData: CreateUserDto, isThirdParty: boolean): Promise<User> {
        if (isEmpty(userData)) throw new HttpException(400, "userData is empty");
    
        const findUser: User | null = await this.users.findOne({ email: userData.email });
        if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

        let hashedPassword;
        if(!isThirdParty) {
          hashedPassword = await hash(userData.password, 10);
        }
        else {
          hashedPassword = "";
        }
        const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });
        return createUserData;
    }

    public async login(signinInfo: LoginDto): Promise<{cookie: string; findUser: User}> {
      if(isEmpty(signinInfo)) throw new HttpException(400, "SigninData is empty");
      const findUser: User | null = await this.users.findOne({email: signinInfo.email});
      if(!findUser) throw new HttpException(409, `This email ${signinInfo.email} was not found`);

      //Don't check the password if it's signed in with a third party
      if(!findUser.isThirdParty) {
        const isPasswordMatching: boolean = await compare(signinInfo.password, findUser.password);
        if(!isPasswordMatching) throw new HttpException(409, "Password is not matching");
      }
      const tokenData = this.createToken(findUser);
      const cookie = this.createCookie(tokenData);

      return {cookie, findUser};
    }

    public async logout(userData: User | undefined): Promise<User> {
      if(userData == undefined || isEmpty(userData)) throw new HttpException(400, "UserData is Empty");
      const findUser: User | null = await this.users.findOne({email: userData.email});
      if (!findUser) throw new HttpException(409, `This email ${userData.email} was not found`);
      return findUser;
    }

    public createToken(user: User): TokenData {
      const dataStoredInToken: DataStoredInToken = {_id: user._id};
      const secretKey: string = SECRET_KEY || "";
      const expiresIn: number = 60 * 60;
      return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn })};
    }

    public createCookie(tokenData: TokenData): string {
      return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
}

export default AuthService;