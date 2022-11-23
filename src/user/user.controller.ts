import { Controller, Get } from '@nestjs/common';
import { User } from './user.decorator';

@Controller('user')
export class UserController {
  @Get()
  async findOne(@User('fistName') firstName: string) {
    console.log(`Hello ${firstName}`);
  }
}
