import { isEmpty } from "class-validator";
import { CreateUserDto } from "../dtos/users.dto";
import { HttpException } from '../exceptions/HttpException';
import { User } from "../interfaces/users.interface";
import { hash } from 'bcrypt';
import userModel from "../models/users.model";

class UserService {
    public users = userModel;

    public async findAllUser(): Promise<User[]> {
        const users: User[] = await this.users.find();
        return users;
    }

    public async createUser(userData: CreateUserDto): Promise<User> {
        if (isEmpty(userData)) throw new HttpException(400, "userData is empty");
    
        const findUser: User | null = await this.users.findOne({ email: userData.email });
        if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);
    
        const hashedPassword = await hash(userData.password, 10);
        const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });
        return createUserData;
    }
}

export default UserService;