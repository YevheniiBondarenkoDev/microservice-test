import { MongooseModuleOptions } from '@nestjs/mongoose';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'mongodb',
  (): MongooseModuleOptions => ({
     uri: process.env.MONGO_CONNECTION_STRING,
  }),
);