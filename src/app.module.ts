import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CqrsModule.forRoot(), UsersModule],
})
export class AppModule {}
