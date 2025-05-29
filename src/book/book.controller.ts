import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('book')
export class BookController {
  // Nest js has provided me the object of bookservice by using injectable annotation
  constructor(private bookService: BookService) {}

  @Get('/findAll')
  findAllBooks(): Book[] {
    return this.bookService.findAllBooks();
  }
  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBook(book);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.bookService.deleteBook(bookId);
  }

  @Post('/addBook')
  addBook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }
}
