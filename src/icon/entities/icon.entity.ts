import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Proyect } from '../../proyect/entities/proyect.entity';
@Entity('icono')
export class Icon {
  @PrimaryGeneratedColumn()
  idicon: number;
  @Column()
  name: string;
  @Column({ type: 'text' })
  urlicon: any;
  @ManyToOne(() => User)
  user: User;
}
