import request from "supertest"
import App from "../app"
import UsersRoute from "../routes/users.route"
import bcrypt from 'bcrypt';
import mongoose from "mongoose";
import { LOG_FORMAT } from "../confg";

describe('User API', () => {
    // describe('GET /users', () => {
    //     it('response findAll Users', async() => {
    //         const userRoute = new UsersRoute();
    //         const app = new App([userRoute]);
    //         return request(app.getServer()).get(`${userRoute.path}`).expect('Content-Type', /json/).expect(200);
    //     })
    // })
    describe('[GET] /users', () => {
        it('response fineAll Users', async () => {
          const usersRoute = new UsersRoute();
          const users = usersRoute.usersController.userService.users;

          const mock = jest.fn();
          //Inject fake result from users.find instead of connect to the real database
          users.find = mock.mockReturnValue([
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
})