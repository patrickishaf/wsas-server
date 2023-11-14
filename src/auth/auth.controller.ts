import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthRepository } from './auth.repository';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  @Post('login')
  async login(@Body() loginData: LoginDto) {
    return await this.authRepository.login(loginData);
  }

  @Post('signup')
  async register(@Body() registrationData: SignupDto) {
    return await this.authRepository.register(registrationData);
  }
}
