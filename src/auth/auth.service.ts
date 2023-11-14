import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { UserService } from 'src/user/user.service';
import { ConfirmSignupDto } from './dto/confirm-signup.dto';
import { User } from 'src/user/models/user.model';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async startRegistration(newUserData: SignupDto) {
    const { dataValues: newUser } = await User.create({ ...newUserData });
    return newUser;
  }

  confirmRegistration(data: ConfirmSignupDto) {
    return data;
  }

  async login(id: string, username: string) {
    const payload = { sub: id, username };
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('jwt.secret'),
    });
    return { accessToken };
  }
}
