import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
@Entity()
export class Information {
  @PrimaryGeneratedColumn()
  idinformation: number;
  @Column()
  email: string;
  @Column()
  cellphone: string;
  @Column()
  age: number;
  @ManyToOne(() => User, (user) => user.iduser)
  users: User;
}
