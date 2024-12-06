import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { NotificationService } from './notification.service';
import { PaginationQuery } from './dto/pagination.query';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>,
  private readonly notificationService: NotificationService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel.findOne({ email: createUserDto.email });
    if (existingUser) {
      throw new BadRequestException(`User with email ${createUserDto.email} already exists`);
    }
    const user = await this.userModel.create(createUserDto);
    await this.notificationService.send('user.created', user);
    return user;
  }
  async update(id: string, updateData: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(id, updateData, {new: true});
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
  async delete(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await this.notificationService.send('user.deleted', deletedUser);
    return deletedUser;
  }

  async findAll({ itemsPerPage, page }: PaginationQuery): Promise<User[]> {
    const skip = (page - 1) * itemsPerPage;
    return this.userModel
      .find()
      .skip(skip)
      .limit(itemsPerPage)
      .exec();  }
}
