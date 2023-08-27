import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
@Entity('lenguaje')
export class Languaje {
  @PrimaryGeneratedColumn()
  idlanguaje: number;
  @Column()
  name: string;
  @Column({ type: 'float' })
  porcentaje: any;
  @ManyToOne(() => User)
  user: User;
}
