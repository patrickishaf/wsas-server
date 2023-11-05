import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './user.repository';

@Controller('users')
export class UserController {
  constructor(private readonly userRespository: UserRepository) {}

  @Post()
  async createUser(@Body() newUser: UserDto) {
    return this.userRespository.createNew(newUser);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() updateData: UserDto) {
    return this.userRespository.updateUser(id, updateData);
  }
}
