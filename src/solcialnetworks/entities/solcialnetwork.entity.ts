import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('socialnetworks')
export class Solcialnetwork {
  @PrimaryGeneratedColumn()
  idsocialnetwor: number;
  @Column({ type: 'longtext' })
  imgIcon: any;
  @Column({ type: 'longtext' })
  url: any;
  @ManyToOne(() => User)
  user: User;
}
