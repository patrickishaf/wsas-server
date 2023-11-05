import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  async createNew(user: UserDto) {
    const { dataValues: newUser } = await User.create({ ...user });
    return newUser.id;
  }

  async updateUser(id: number, updateData: UserDto) {
    const matchingUser = await User.findOne({
      where: {
        id,
      },
    });
    await matchingUser.update(updateData);
    await matchingUser.save();
  }

  async findByEmail() {}

  async deleteUser() {}

  async getAllUsers() {}

  async getPaginatedUsers() {}
}
