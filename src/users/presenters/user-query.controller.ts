import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { GetUsersQuery } from '#users/application/get-users';
import { UserFacade } from '#users/application/user.facade';
import { User } from '#users/domain';

@Controller()
export class UserQueryController {
  public constructor(private readonly userFacade: UserFacade) {
    setTimeout(async () => {
      const result = await this.findAll();
      console.log('result', result);
    }, 2000);
  }

  @MessagePattern('get-users')
  public findAll(): Promise<User[]> {
    const query = new GetUsersQuery();
    return this.userFacade.findAll(query);
  }
}
