export class UpdateBorrowingDto {
  bookId?: number;
  readerId?: number;
  borrowDate?: string;
  returnDate?: string;
  expectedReturnDate?: string;
  status?: 'borrowed' | 'returned' | 'overdue';
}
