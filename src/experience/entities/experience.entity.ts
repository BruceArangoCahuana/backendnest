import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

export class Experience {
  @PrimaryGeneratedColumn()
  idexperience: number;
  @Column()
  job: string;
  @Column({ type: 'date' })
  start_date: any;
  @Column({ type: 'date' })
  final_date: any;
  @Column({ type: 'longtext' })
  abstract: any;
  @ManyToOne(() => User)
  user: User;
}
