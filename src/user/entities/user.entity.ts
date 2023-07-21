import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import{ hash} from 'bcrypt'
@Entity({ name: 'usuario' })
export class User {
  @PrimaryGeneratedColumn()
  iduser: number;
  @Column()
  name: string;
  @Column()
  firstname: string;
  @Column({ unique: true })
  shortname: string;
  @Column({ type: 'longtext' })
  pass: any;

  @BeforeInsert()
  @BeforeUpdate()
  async hasPass() {
    if (!this.pass) return;
    this.pass = await hash(this.pass, 10);
  }
}
