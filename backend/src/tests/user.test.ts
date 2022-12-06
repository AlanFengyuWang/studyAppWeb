import request from "supertest"
import App from "../app"
import UsersRoute from "../routes/users.route"
import bcrypt from 'bcrypt';
import mongoose, { mongo } from "mongoose";
import { LOG_FORMAT } from "../confg";
import { CreateUserDto } from "../dtos/users.dto";

describe('User API', () => {
    describe('[GET] /users', () => {
        it('response fineAll Users', async () => {
          const usersRoute = new UsersRoute();
          const users = usersRoute.usersController.userService.users;

          const mock = jest.fn();
          //Inject fake result from users.find instead of connect to the real database
          users.find = mock.mockReturnValue([
          ]);
          //using a fake function to "connect" to the db
          (mongoose as any).connect = mock;
          const app = new App([usersRoute]);
          
          return request(app.getServer()).get(`${usersRoute.path}`).expect(200);
        });

        it('output findAll Users', async() => {
            const usersRoute = new UsersRoute();
            const users = usersRoute.usersController.userService.users;
            const mock = jest.fn();
            const data = [
                {
                    _id: 'qpwoeiruty',
                    email: 'a@email.com',
                    password: await bcrypt.hash('q1w2e3r4!', 10),
                  },
                  {
                    _id: 'alskdjfhg',
                    email: 'b@email.com',
                    password: await bcrypt.hash('a1s2d3f4!', 10),
                  },
                  {
                    _id: 'zmxncbv',
                    email: 'c@email.com',
                    password: await bcrypt.hash('z1x2c3v4!', 10),
                  },
            ]
            users.find = mock.mockReturnValue(data);
            (mongoose as any).connect = mock;
            const app = new App([usersRoute]);
            return request(app.getServer()).get(`${usersRoute.path}`).expect(200).then((response) => {expect(response.body.data).toEqual(data)});
        })
      });
    describe('[GET] /users/:id', () => {
        it('response find user based on Id successfully', async() => {
            //testing data
            const userId = '60706478aad6c9ad19a31c84';
            const userTestingData: CreateUserDto = 
                {
                    "name": {
                      "first": "Lee",
                      "last": "Liu"
                    },
                    "email": "1234@gmail.com",
                    "password": "jweqironvjaiqe",
                    "image": "https://lh3.googleusercontent.com/a/AATXAJxUDzkNkkuG1y0lqH7s7xI0EcwMqkUOtvogGtkW=s96-c",
                    "accountTimeCreated": "2022-07-02T07:02:25.707Z",
                    "tasks":[]
                }
            const userRoute = new UsersRoute();
            const users = userRoute.usersController.userService.users;
            const mock = jest.fn();
            users.findOne = mock.mockReturnValue({
                ...userTestingData
            })
            (mongoose as any).connect = mock;
            const app = new App([userRoute]);
            return request(app.getServer()).get(`${userRoute.path}/${userId}`).expect(200);
        })

        it('response find user based on empty Id', async() => {
            //testing data
            const userId = '60706478aad6c9ad19a31c84';
            const userRoute = new UsersRoute();
            const users = userRoute.usersController.userService.users;
            const mock = jest.fn();
            users.findOne = mock.mockReturnValue(null);
            (mongoose as any).connect = mock;
            const app = new App([userRoute]);
            return request(app.getServer()).get(`${userRoute.path}/${userId}`).expect(409);
        })
    })
    describe('[POST] /users', () => {
        it('response post user', async() => {
            const testingData = {
                "name": {
                  "first": "Lee",
                  "last": "Liu"
                },
                "email": "1234@gmail.com",
                "password": "jweqironvjaiqe",
                "image": "https://lh3.googleusercontent.com/a/AATXAJxUDzkNkkuG1y0lqH7s7xI0EcwMqkUOtvogGtkW=s96-c",
                "accountTimeCreated": "2022-07-02T07:02:25.707Z",
                "tasks": [
                ]
              }
            const userRoute = new UsersRoute();
            const users = userRoute.usersController.userService.users;
            users.findOne = jest.fn().mockReturnValue(null);
            users.create = jest.fn().mockReturnValue(testingData);
            (mongoose as any).connect = jest.fn();
            const app = new App([userRoute]);
            return request(app.getServer()).post(`${userRoute.path}`).send(testingData).expect(201);
        })
    })
})