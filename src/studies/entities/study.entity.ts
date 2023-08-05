import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
@Entity('estudios')
export class Study {
  @PrimaryGeneratedColumn()
  idstudy: number;
  @Column()
  title: string;
  @Column()
  company: string;
  @Column({ type: 'date' })
  start_date: any;
  @Column({ type: 'date' })
  final_date: any;
  @Column()
  actuality: string;
  @Column({ type: 'longtext' })
  abstract: any;
  @Column()
  status: string;
  @ManyToOne(() => User)
  user: User;
}
