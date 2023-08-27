import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('proyectos')
export class Proyect {
  @PrimaryGeneratedColumn()
  idproyect: number;
  @Column()
  name: string;
  @Column({ type: 'text' })
  pathimage: any;
  @Column({ type: 'text' })
  pathurl: any;
  @Column({ type: 'text' })
  link: any;
  @ManyToOne(() => Proyect)
  proyect: Proyect;
  @ManyToOne(() => User)
  user: User;
}
