import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async createTemporaryUser(newUser: SignupDto) {
    return newUser;
  }

  async login(loginData: LoginDto) {
    return await this.userService.findByEmail(loginData.email);
  }
}
