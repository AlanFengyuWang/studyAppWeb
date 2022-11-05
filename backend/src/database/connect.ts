import { DB_HOST, DB_PORT, DB_DATABASE, ATLAS_URL, DB_NAME } from '../confg/index';

export const dbConnection = {
  url: ATLAS_URL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
};






