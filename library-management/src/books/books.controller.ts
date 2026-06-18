import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Body,
	Param,
	ParseIntPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
	constructor(private readonly booksService: BooksService) {}

	@Post()
	create(@Body() dto: CreateBookDto) {
		return this.booksService.create(dto.title, dto.quantity);
	}

	@Get()
	findAll() {
		return this.booksService.findAll();
	}

	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.booksService.findOne(id);
	}

	@Put(':id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() dto: UpdateBookDto,
	) {
		return this.booksService.update(id, dto);
	}

	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.booksService.remove(id);
	}
}
