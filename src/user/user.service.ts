import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  async createNew(user: UserDto) {
    const { dataValues: newUser } = await User.create({ ...user });
    console.log({ newUser });
    return newUser.id;
  }

  async updateUser() {}

  async findByEmail() {}

  async deleteUser() {}

  async getAllUsers() {}

  async getPaginatedUsers() {}
}
