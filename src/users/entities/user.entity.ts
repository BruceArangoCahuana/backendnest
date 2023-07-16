import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  iduser: number;
  @Column()
  name: string;
  @Column()
  firstname: string;
  @Column()
  correo: string;
  @Column()
  perfil: string;
  @Column()
  job: string;
}
