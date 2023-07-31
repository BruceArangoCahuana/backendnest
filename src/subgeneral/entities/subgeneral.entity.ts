import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../../user/entities/user.entity';
@Entity('subgeneral')
export class Subgeneral {
  @PrimaryGeneratedColumn()
  idsubgeneral: number;
  @Column({ type: 'longtext' })
  abstrac: any;
  @ManyToOne(() => User)
  user: User;
}
