import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
import { LogModule } from './modules/log/log.module';
import { UserController } from './controllers/user/user.controller';
import { BooksController } from './controllers/books/books.controller';
import { LogController } from './controllers/log/log.controller';
@Module({
  imports: [UserModule, BookModule, LogModule],
  controllers: [UserController, BooksController, LogController],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('App Module');
  }
}
