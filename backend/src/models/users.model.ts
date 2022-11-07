import { model, Schema, Document } from 'mongoose';
import { User } from '../interfaces/users.interface';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required:true,
  },
  accountTimeCreated: {
    type: String,
    require: true,
  }
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
