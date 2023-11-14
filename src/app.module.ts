import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule } from './wallet/wallet.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { configuration } from 'config/configuration';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    WalletModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/config/env/.env.${process.env.NODE_ENV}`,
      load: [configuration],
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
