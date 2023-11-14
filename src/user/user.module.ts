import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserIdGenerator } from './user-id-gen';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, UserIdGenerator],
  exports: [UserService],
})
export class UserModule {}
