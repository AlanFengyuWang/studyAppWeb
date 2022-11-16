import App from './app';
import IndexRoute from './routes/index.route';
import TasksRoute from './routes/tasks.route';
import UsersRoute from './routes/users.route';

// validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new TasksRoute()]);

app.listen();
