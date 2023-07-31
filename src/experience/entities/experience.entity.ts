import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
@Entity('experiencia')
export class Experience {
  @PrimaryGeneratedColumn()
  idexperience: number;
  @Column()
  job: string;
  @Column({ type: 'date' })
  start_date: any;
  @Column({ type: 'date' })
  final_date: any;
  @Column()
  actuality: string;
  @Column({ type: 'longtext' })
  abstract: any;
  @Column()
  company: string;
  @Column({ type: 'longtext' })
  imagecompany: any;
  @ManyToOne(() => User)
  user: User;
}
