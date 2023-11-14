/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { SignupService } from './signup.service';
import { ConfirmSignupDto } from './dto/confirm-signup.dto';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthRepository {
  constructor(
    private readonly signupService: SignupService,
    private readonly loginService: LoginService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  signup(userData: SignupDto) {
    return this.signupService.createTemporaryUser(userData);
  }

  confirmSignup(data: ConfirmSignupDto) {
    return this.signupService.confirmSignup(data);
  }

  async login(loginData: LoginDto) {
    try {
      const { id, username } = await this.loginService.login(loginData);
      const payload = { sub: id, username };
      const accessToken = await this.jwtService.signAsync(payload, {
        secret: this.configService.get('jwt.secret'),
      });
      return { accessToken };
    } catch (e) {
      const err = e as Error;
      if (err.message === 'Cannot read properties of null (reading \'dataValues\')') {
        throw new NotFoundException('no user with this email exists');
      }
      throw new InternalServerErrorException();
    }
  }
}
