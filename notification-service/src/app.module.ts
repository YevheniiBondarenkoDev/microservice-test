import { Module } from '@nestjs/common';
import { UserEventsListener } from './user-events.listener';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true})],
  controllers: [UserEventsListener],
})
export class AppModule {}
