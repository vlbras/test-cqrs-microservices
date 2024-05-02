import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { GetUsersQuery } from './get-users.query';

import { User } from '#users/domain';

@QueryHandler(GetUsersQuery)
export class GetUsersQueryHandler
  implements IQueryHandler<GetUsersQuery, User[]>
{
  public async execute(query: GetUsersQuery): Promise<User[]> {
    console.log(query);
    return [{ email: 'test@test.com' }];
  }
}
