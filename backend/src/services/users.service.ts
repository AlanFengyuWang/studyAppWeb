import { isEmpty } from "../utils/utils";
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

    public async findUserById(userId: string): Promise<User> {
        if(isEmpty(userId)) throw new HttpException(400, "UserId is empty");
        const findUser: User | null = await this.users.findOne({_id: userId});
        if(!findUser) throw new HttpException(409, "User doesn't exist");
        return findUser;
    }

    public async updateUser(userId: String, userData: CreateUserDto): Promise<User> {
        if(isEmpty(userData)) throw new HttpException(400, "user Data is empty");

        if(userData.email) {
            const findUser: User | null = await this.users.findOne({_id: userId});
            if(findUser && findUser._id != userId) throw new HttpException(409,`This email ${userData.email} already exists`);
        }

        if(userData.password) {
            const hashedPassword = await hash(userData.password, 10);
            userData = { ...userData, password: hashedPassword};
        }
        console.log("userData = " + JSON.stringify(userData));
        
        const updateUserById: User | null = await this.users.findOneAndUpdate({_id: userId}, {$set: userData}, {new:true});
        if(!updateUserById) throw new HttpException(409, "User doesn't exist");

        return updateUserById;
    }
}

export default UserService;