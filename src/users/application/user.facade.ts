import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { GetUsersQuery } from './get-users';

import { User } from '#users/domain';

@Injectable()
export class UserFacade {
  public constructor(private readonly queryBus: QueryBus) {
    setTimeout(async () => {
      const result = await this.findAll(new GetUsersQuery());
      console.log('result', result);
    }, 2000);
  }

  public async findAll(query: GetUsersQuery): Promise<User[]> {
    return this.queryBus.execute(query);
  }
}
