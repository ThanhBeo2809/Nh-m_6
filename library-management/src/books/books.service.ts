import { Injectable, NotFoundException } from '@nestjs/common';

export type Book = {
	id: number;
	title: string;
	quantity: number;
};

@Injectable()
export class BooksService {
	private books: Book[] = [];
	private nextId = 1;

	create(title: string, quantity = 0) {
		const book: Book = { id: this.nextId++, title, quantity };
		this.books.push(book);
		return book;
	}

	findAll() {
		return this.books;
	}

	findOne(id: number) {
		const book = this.books.find(b => b.id === id);
		if (!book) throw new NotFoundException(`Book with id ${id} not found`);
		return book;
	}

	update(id: number, attrs: Partial<Omit<Book, 'id'>>) {
		const book = this.books.find(b => b.id === id);
		if (!book) throw new NotFoundException(`Book with id ${id} not found`);
		if (attrs.title !== undefined) book.title = attrs.title;
		if (attrs.quantity !== undefined) book.quantity = attrs.quantity;
		return book;
	}

	remove(id: number) {
		const idx = this.books.findIndex(b => b.id === id);
		if (idx === -1) throw new NotFoundException(`Book with id ${id} not found`);
		const [removed] = this.books.splice(idx, 1);
		return removed;
	}
}
