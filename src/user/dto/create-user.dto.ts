import {
  IsByteLength,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  id?: string;

  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  username?: string;

  @IsEmail()
  email?: string;

  @IsPhoneNumber()
  phoneNumber?: string;

  @IsEmpty()
  accountId?: string;

  @IsNotEmpty()
  country?: string;

  @IsNotEmpty()
  @IsString()
  @IsByteLength(8)
  password?: string;
}
