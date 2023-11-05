/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

describe('AppController', () => {
  let appController: AppController;
  const configuration = () => ({
    NODE_ENV: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 3000,
    db: {
      dbUrl: process.env.DB_URL,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  });

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: `${process.cwd()}/config/env/.env.${process.env.NODE_ENV}`,
          load: [configuration],
        }),
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
