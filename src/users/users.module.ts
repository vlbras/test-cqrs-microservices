import { Module } from '@nestjs/common';

import { UserApplicationModule } from './application/user-application.module';
import { UserQueryController } from './presenters/user-query.controller';

@Module({
  imports: [UserApplicationModule],
  controllers: [UserQueryController],
})
export class UsersModule {}
