import { Task } from "./tasks.interface";

export interface User {
    _id: string;
    email: string;
    password: string;
    image: string;
    accountTimeCreated: Date;
    tasks: Task[];
    isThirdParty: boolean;
}
