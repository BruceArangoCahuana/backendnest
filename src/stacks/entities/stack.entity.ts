import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
@Entity('stacks')
export class Stack {
  @PrimaryGeneratedColumn()
  idstack: number;
  @Column()
  name: string;
  @Column({ type: 'float' })
  porcentaje: any;
  @ManyToOne(() => User)
  user: User;
}
