import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { RmqOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class NotificationService {
  private client: ClientProxy;

  constructor(private configService: ConfigService) {
    this.client = ClientProxyFactory.create(configService.get<RmqOptions>('rabbitMq'));
  }

  async send(event: string, payload: any): Promise<void> {
    await firstValueFrom(this.client.emit(event, payload));
  }
}