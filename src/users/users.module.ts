import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { UserApplicationModule } from './application/user-application.module';
import { UserQueryController } from './presenters/user-query.controller';

@Module({
  imports: [CqrsModule.forRoot(), UserApplicationModule],
  controllers: [UserQueryController],
})
export class UsersModule {}
