import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthRepository } from './auth.repository';

@Controller('auth')
export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  @Post('login')
  async login(@Body() loginData: LoginDto) {
    return this.authRepository.login(loginData);
  }
}
