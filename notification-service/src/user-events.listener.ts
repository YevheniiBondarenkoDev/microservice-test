import { Injectable, Logger } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Injectable()
export class UserEventsListener {
  private readonly logger = new Logger(UserEventsListener.name);

  @EventPattern('user.created')
  handleUserCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.logger.log(`Received "user.created" event: ${JSON.stringify(data)}`);
    console.log(`Hello, ${data.name}!`);
  }

  @EventPattern('user.deleted')
  handleUserDeleted(@Payload() data: any, @Ctx() context: RmqContext) {
    this.logger.log(`Received "user.deleted" event: ${JSON.stringify(data)}`);
    console.log(`User ${data.name} has been deleted!`);
  }
}
