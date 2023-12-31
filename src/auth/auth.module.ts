import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: new ConfigService().get('jwt.secret'),
      signOptions: { expiresIn: '2 days' },
    }),
  ],
})
export class AuthModule {}
