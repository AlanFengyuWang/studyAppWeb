import cors from 'cors';
import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';
import express, { RouterOptions, urlencoded } from 'express';
import { CallbackWithoutResult, connect, ConnectOptions, set } from 'mongoose';
import { Routes } from './interfaces/routes.interface';
import { ORIGIN, PORT, NODE_ENV, CREDENTIALS} from "./confg";
import { logger, stream } from './utils/logger';
import * as mongoDB from "mongodb";
// import { connectToServer } from './database/connect';
import { dbConnection } from './database/connect';

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;
    public db: mongoDB.Db | undefined;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || "development";
        this.port = PORT || 3000;
        
        this.connectToDatabase();
        this.initializedMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSwagger();
        this.initializeErrorHandling();
    }
    
    public listen() {
        this.app.listen(this.port, () => {
            logger.info(`=================================`);
            logger.info(`======= ENV: ${this.env} =======`);
            logger.info(`🚀 App listening on the port ${this.port}`);
            logger.info(`=================================`);
        })
    }
    
    public connectToDatabase() {
        if(this.env !== 'production') {
            set('debug', true);
        }
        connect(dbConnection.url || "", dbConnection.options as ConnectOptions, (err) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log("MongoDB is connected");
            }
        });
    }
    
    private initializedMiddlewares = () => {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(cookieParser());
        this.app.use(express.json());
        this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    }
    
    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        })
    }

    private initializeSwagger() {

    }

    private initializeErrorHandling() {
    }
}

export default App;




