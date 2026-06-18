export class CreateBorrowingDto {
  bookId: number;
  readerId: number;
  borrowDate?: string; // ISO date
  expectedReturnDate?: string; // ISO date
}
