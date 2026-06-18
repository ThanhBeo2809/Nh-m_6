import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BorrowingService } from './borrowing.service';
import { CreateBorrowingDto } from './dto/create-borrowing.dto';

@Controller('borrowings')
export class BorrowingController {
  constructor(private readonly borrowingService: BorrowingService) {}

  @Post()
  create(@Body() createBorrowingDto: CreateBorrowingDto) {
    return this.borrowingService.create(createBorrowingDto);
  }

  @Get()
  findAll() {
    return this.borrowingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.borrowingService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateBorrowingDto: Partial<CreateBorrowingDto>) {
    return this.borrowingService.update(id, updateBorrowingDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.borrowingService.remove(id);
  }
}
