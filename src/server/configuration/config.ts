import { config } from 'dotenv';


config();

export default {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 3001,
  TOKEN_SECRET: '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611',
  TOKEN_TIME_EXPIRATION: 86400, //24hs
  CORS_ALLOWED_ORIGINS: ['http://localhost:3000', 'http://localhost:3001', undefined],
  TIME_ZONE: '-03:00',
  mongo: {
    MONGO_HOST: process.env.NODE_APP_MONGO_HOST,
    MONGO_PORT: process.env.NODE_APP_MONGO_PORT,
    MONGO_DB: process.env.NODE_APP_MONGO_DB,
    MONGO_USER: process.env.NODE_APP_MONGO_USER,
    MONGO_PASSWORD: process.env.NODE_APP_MONGO_PASSWORD,
    MONGO_MAX_CONNECTION: process.env.NODE_APP_MONGO_MAX_CONNECTION
  },
  mssql: {
    MSSQL_HOST: process.env.NODE_APP_MSSQL_HOST,
    MSSQL_INSTANCE: process.env.NODE_APP_MSSQL_INSTANCE,
    MSSQL_PORT: process.env.NODE_APP_MSSQL_PORT,
    MSSQL_DB: process.env.NODE_APP_MSSQL_DB,
    MSSQL_USER: process.env.NODE_APP_MSSQL_USER,
    MSSQL_PASSWORD: process.env.NODE_APP_MSSQL_PASSWORD,
    MSSQL_MAX_CONNECTION: process.env.NODE_APP_MSSQL_MAX_CONNECTION
  },
  pgsql: {
    PGSQL_HOST: process.env.NODE_APP_PGSQL_HOST,
    PGSQL_PORT: process.env.NODE_APP_PGSQL_PORT,
    PGSQL_DB: process.env.NODE_APP_PGSQL_DB,
    PGSQL_USER: process.env.NODE_APP_PGSQL_USER,
    PGSQL_PASSWORD: process.env.NODE_APP_PGSQL_PASSWORD,
    PGSQL_MAX_CONNECTION: process.env.NODE_APP_PGSQL_MAX_CONNECTION
  }
}
