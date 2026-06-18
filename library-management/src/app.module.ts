import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { BorrowingModule } from './borrowing/borrowing.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '201006',
      database: 'QuanLyThuVien',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BooksModule,
  ],
})
export class AppModule {}
