import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('general')
export class General {
  @PrimaryGeneratedColumn()
  idgeneral: number;
  @Column({ type: 'longtext' })
  abstract: any;
  @ManyToOne(() => User)
  user: User;
}
