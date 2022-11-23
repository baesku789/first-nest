import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipeline/validation.pipe';
import { HttpExceptionFilter } from './http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { ExcludeNullInterceptor } from './excludeNull.interceptor';
import { ErrorsInterceptor } from './interceptor/errors.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(
    new TransformInterceptor(),
    new ExcludeNullInterceptor(),
    new ErrorsInterceptor(),
  );
  await app.listen(3000);
}
bootstrap();
