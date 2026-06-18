import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('borrowings')
export class Borrowing {
  @PrimaryGeneratedColumn()
  borrowid: number;

  @Column({ type: 'int' })
  readerid: number;

  @Column({ type: 'int' })
  bookid: number;

  @Column({ type: 'date' })
  borrowdate: Date;

  @Column({ type: 'date', nullable: true })
  returndate: Date;
}
