import { IsNotEmpty, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateBorrowingDto {
  @IsNotEmpty()
  @IsNumber()
  readerid: number;

  @IsNotEmpty()
  @IsNumber()
  bookid: number;

  @IsNotEmpty()
  @IsDateString()
  borrowdate: string;

  @IsOptional()
  @IsDateString()
  returndate?: string;
}
