import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sequelize } from 'sequelize';
import { initializeDbModels } from './db.models';
import { config as exposeEnvironmentVariables } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

/**
 * ---------------THE REASON I'M CALLING exposeEnvironmentVariables() TWICE-------------------
 * -------------------------------------------------------------------------------------------
 * process.env.NODE_ENV is not available normally.
 * The first call makes process.env.NODE_ENV available and the second call uses the value
 * that has been made available to tell dotenv the right .env file to get its variables from.
 * -------------------------------------------------------------------------------------------
 * -------------------------------------------------------------------------------------------
 */
exposeEnvironmentVariables();
exposeEnvironmentVariables({ path: `.env.${process.env.NODE_ENV}` });

export const sequelize = new Sequelize(process.env.DB_URL, {
  logging: console.log,
});

async function bootstrap(orm: Sequelize) {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await orm.authenticate();
    initializeDbModels();
    await orm.sync({ alter: true });
    await app.listen(3000);
  } catch (err) {
    console.error('FAILED TO CONNECT TO THE DATABASE:', err);
  }
}

bootstrap(sequelize);
