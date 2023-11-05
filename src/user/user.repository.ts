import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UserIdGenerator } from './user-id-gen';

@Injectable()
export class UserRepository {
  constructor(
    private readonly userService: UserService,
    private readonly idGenerator: UserIdGenerator,
  ) {}

  async createNew(user: UserDto) {
    const newUser: UserDto = {
      ...user,
      accountId: this.idGenerator.generate(),
    };
    return await this.userService.createNew(newUser);
  }

  async updateUser(id: number, updateData: UserDto) {
    await this.userService.updateUser(id, updateData);
  }
}
