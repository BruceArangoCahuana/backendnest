import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
@Entity()
export class General {
  @PrimaryGeneratedColumn()
  idgeneral: number;
  @Column({ type: 'longtext' })
  abstract: string;
  @Column({ type: 'longtext' })
  conocimiento: string;
  @ManyToOne(() => User, (user) => user.iduser)
  users: User;
}
