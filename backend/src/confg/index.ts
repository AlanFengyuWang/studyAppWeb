import { config } from 'dotenv';

config({ path: `../.env.${process.env.NODE_ENV || 'development'}.local` });

// export const authConfig = {
//   routes: {
//     login:false,
    
//     postLogoutRedirect: 'http://localhost:3000'
//   }
// }

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_DATABASE, DB_NAME, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN, ATLAS_URL } = process.env;
