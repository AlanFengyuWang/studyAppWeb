import { hash } from "bcrypt";
import { CreateUserDto } from "../dtos/users.dto";
import { HttpException } from "../exceptions/HttpException";
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
}

export default AuthService;