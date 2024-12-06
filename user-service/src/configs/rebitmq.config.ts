import { RmqOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { Transport } from '@nestjs/microservices';
import { registerAs } from '@nestjs/config';

export default registerAs('rabbitMq', (): RmqOptions => ({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'user-events',
      queueOptions: {
        durable: true,
      },
    },
  }),
);