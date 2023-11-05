import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
// import { UserDto } from './user.dto';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // describe('when createNew is called', () => {
  //   const newUser: UserDto = {
  //     name: 'Firstname Lastname',
  //     username: 'username',
  //     email: 'email',
  //     phoneNumber: 'phonenumber',
  //     accountId: 'accountid',
  //     country: 'country',
  //   };
  //   it('should return the id of the object', async () => {
  //     const newObjId = await service.createNew(newUser);
  //     expect(newObjId).not.toBeUndefined();
  //   });
  // });
});
