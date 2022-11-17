import { string } from 'joi';
import { model, Schema, Document } from 'mongoose';
import { User } from '../interfaces/users.interface';

const taskSchema = new Schema({
    title: {
      type: String,
      // required: true,
    },

    description: {
        type: String,
    },

    type: {
        type: String,
        enum: ["Work",
        "Exercise",
        "Entertainment",
        "Others"],
        // required:true
    },

    due: {
        type: String,
    },

    startingTime: {
        type: String
    }
  })

const userSchema: Schema = new Schema({
  name: {
    first: String,
    last: String
  },
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
  },
  tasks: {
    type: [taskSchema],
  }
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
