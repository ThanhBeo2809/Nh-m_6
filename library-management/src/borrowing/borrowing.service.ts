import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Borrowing } from './borrowing.entity';
import { CreateBorrowingDto } from './dto/create-borrowing.dto';

@Injectable()
export class BorrowingService {
  constructor(
    @InjectRepository(Borrowing)
    private readonly borrowingRepository: Repository<Borrowing>,
  ) {}

  async create(createBorrowingDto: CreateBorrowingDto): Promise<Borrowing> {
    const newBorrow = this.borrowingRepository.create(createBorrowingDto);
    return await this.borrowingRepository.save(newBorrow);
  }

  async findAll(): Promise<Borrowing[]> {
    return await this.borrowingRepository.find();
  }

  async findOne(id: number): Promise<Borrowing> {
    const borrowing = await this.borrowingRepository.findOne({ where: { borrowid: id } });
    if (!borrowing) {
      throw new NotFoundException(`Không tìm thấy phiếu mượn mã ${id}`);
    }
    return borrowing;
  }

  async update(id: number, updateBorrowingDto: Partial<CreateBorrowingDto>): Promise<Borrowing> {
    const borrowing = await this.findOne(id);
    Object.assign(borrowing, updateBorrowingDto);
    return await this.borrowingRepository.save(borrowing);
  }

  async remove(id: number): Promise<void> {
    const borrowing = await this.findOne(id);
    await this.borrowingRepository.remove(borrowing);
  }
}
