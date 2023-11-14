import {
  IsByteLength,
  IsEmail,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class SignupDto {
  @IsString()
  @IsByteLength(4)
  username: string;

  @IsEmail()
  email: string;

  @IsByteLength(8)
  password: string;

  @IsString()
  country: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsPhoneNumber()
  phoneNumber: string;
}
