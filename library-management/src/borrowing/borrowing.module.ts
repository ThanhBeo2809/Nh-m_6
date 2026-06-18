import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorrowingService } from './borrowing.service';
import { BorrowingController } from './borrowing.controller';
import { Borrowing } from './borrowing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Borrowing])],
  controllers: [BorrowingController],
  providers: [BorrowingService],
  exports: [BorrowingService],
})
export class BorrowingModule {}
