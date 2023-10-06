import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  basicRoute(): string {
    return 'This is basic route';
  }
}
