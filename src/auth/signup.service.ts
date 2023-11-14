import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { ConfirmSignupDto } from './dto/confirm-signup.dto';

@Injectable()
export class SignupService {
  createTemporaryUser(newUser: SignupDto) {
    return newUser;
  }

  confirmSignup(data: ConfirmSignupDto) {
    return data;
  }
}
