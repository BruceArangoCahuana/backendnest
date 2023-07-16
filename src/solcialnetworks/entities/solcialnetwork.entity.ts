import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Solcialnetwork {
  @PrimaryGeneratedColumn()
  idsolcialnetwork: number;
  @Column()
  icon: string;
  @Column()
  url: string;
  @ManyToOne(() => User, (user) => user.iduser)
  users: User;
}
