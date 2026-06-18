import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ReadersService } from './readers.service';
import { CreateReaderDto } from './dto/create-reader.dto';
import { UpdateReaderDto } from './dto/update-reader.dto';

@Controller('readers')
export class ReadersController {
  constructor(private readonly readersService: ReadersService) {}

  @Post()
  create(@Body() dto: CreateReaderDto) {
    return this.readersService.create(dto.name, dto.email, dto.phone);
  }

  @Get()
  findAll() {
    return this.readersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.readersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateReaderDto) {
    return this.readersService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.readersService.remove(id);
  }
}
