
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
    console.log(process.env.DATABASE_USERNAME)
  console.log(process.env.DATABASE_PORT)
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CLIENT, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
  });
  await app.listen(4000);
}
bootstrap();
