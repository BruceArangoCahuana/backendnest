import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('informacion')
export class Information {
  @PrimaryGeneratedColumn()
  idinformation: number;
  @Column({ unique: true })
  email: string;
  @Column({ length: 8 })
  cellphone: string;
  @Column()
  age: number;
  @ManyToOne(() => User)
  user: User;
}
