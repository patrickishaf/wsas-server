import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  async createNew(user: CreateUserDto) {
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

  async findByEmail(email: string) {
    const matchingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (matchingUser) console.log(matchingUser.dataValues);
    return matchingUser ? matchingUser.dataValues : null;
  }

  async findByUsername(username: string) {
    const matchingUser = await User.findOne({
      where: {
        username,
      },
    });

    if (matchingUser) console.log(matchingUser.dataValues);
    return matchingUser ? matchingUser.dataValues : null;
  }

  async deleteUser() {}

  async getAllUsers() {}

  async getPaginatedUsers() {}
}
