/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { ConfirmSignupDto } from './dto/confirm-signup.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthRepository {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  async register(userData: SignupDto) {
    const existingUserErrorMsg = 'a user already exists with that email';
    const usernameTaken = 'the username has already been taken';
    try {
      const existingUser = await this.userService.findByEmail(userData.email);
      if (existingUser) throw new ForbiddenException(existingUserErrorMsg);

      const userWithUsername = await this.userService.findByUsername(userData.username);
      if (userWithUsername) throw new ForbiddenException(usernameTaken);

      const { id, username } = await this.authService.startRegistration(userData);
      const payload = { sub: id, username };
      const accessToken = await this.jwtService.signAsync(payload, {
        secret: this.configService.get('jwt.secret'),
      });
      return { accessToken };
    } catch (e) {
      const err =  e as Error;
      if (err.message !== existingUserErrorMsg && err.message !== usernameTaken) {
        throw new BadRequestException(err.message);
      }
      throw new ForbiddenException(err.message);
    }
  }

  async confirmRegistration(data: ConfirmSignupDto) {
    return this.authService.confirmRegistration(data);
  }

  async login(loginData: LoginDto) {
    const userNotFound = 'no user with this email exists';
    try {
      const existingUser = await this.userService.findByEmail(loginData.email);

      if (!existingUser) throw new NotFoundException(userNotFound)

      const { id, username } = existingUser;

      return await this.authService.login(id, username)
      
      
    } catch (e) {
      const err = e as Error;
      if (err.message === userNotFound) {
        throw new NotFoundException(userNotFound);
      }
      throw new InternalServerErrorException();
    }
  }
}
