import { Module } from '@nestjs/common';

import { GetUsersQueryHandler } from './get-users';
import { UserFacade } from './user.facade';

@Module({
  providers: [
    UserFacade,

    /* query handlers */
    GetUsersQueryHandler,
  ],
  exports: [UserFacade],
})
export class UserApplicationModule {}
