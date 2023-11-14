import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UserIdGenerator } from './user-id-gen';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    private readonly userService: UserService,
    private readonly idGenerator: UserIdGenerator,
  ) {}

  async createNew(user: CreateUserDto) {
    const newUser: CreateUserDto = {
      ...user,
      accountId: this.idGenerator.generate(),
    };
    return await this.userService.createNew(newUser);
  }

  async updateUser(id: number, updateData: UserDto) {
    await this.userService.updateUser(id, updateData);
  }
}
