import { Controller, Get, Header, Param, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds new cat';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns ${params.id} cat`;
  }

  @Get()
  findAll(): Observable<any[]> {
    return of([]);
  }
}
