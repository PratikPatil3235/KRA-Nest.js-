import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { LoggerMiddleware } from './book.middleware';

@Module({
  imports: [],
  exports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('book');
  }
}
