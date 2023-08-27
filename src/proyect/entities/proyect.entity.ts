import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Icon } from "../../icon/entities/icon.entity";

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
  @ManyToOne(() => Icon)
  icon: Icon;
  @ManyToOne(() => User)
  user: User;
}
