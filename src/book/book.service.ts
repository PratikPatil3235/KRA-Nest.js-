import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];
  //addBook

  addBookService(book: Book): string {
    //id auto generated
    book.id = uuidv4();
    this.books.push(book);
    return `Book has been succesfully added`;
  }
  //update book
  updateBook(book: Book): string {
    let index = this.books.findIndex((currBook) => currBook.id === book.id);
    this.books[index] = book;
    return `Book has been succesfully updated`;
  }
  //deleteBook
  deleteBook(bookId: string): string {
    this.books = this.books.filter((book) => {
      return book.id !== bookId;
    });
    return `This book has been deleted`;
  }
  //findAllbooks
  findAllBooks(): Book[] {
    return this.books;
  }
}
