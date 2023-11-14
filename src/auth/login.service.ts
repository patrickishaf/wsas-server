import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LoginService {
  constructor(private readonly userService: UserService) {}

  async login(loginData: LoginDto) {
    const existingUser = await this.userService.findByEmail(loginData.email);
    return existingUser;
  }
}
