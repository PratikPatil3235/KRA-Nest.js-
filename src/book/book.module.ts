import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  imports: [],
  exports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
