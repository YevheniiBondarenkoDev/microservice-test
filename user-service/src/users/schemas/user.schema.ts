import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  email: string;
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
