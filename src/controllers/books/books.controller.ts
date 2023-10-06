import { Controller } from '@nestjs/common';

@Controller('book')
export class BooksController {
  //  add book
  addBook(): string {
    return 'This is post route';
  }
    //   delete book
    
}
