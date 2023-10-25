import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  id: string = "";

  @Column()
  firstName: string = "";

  @Column()
  lastName: string = "";

  @Column()
  age: number = 0;

  constructor(props: Partial<User> = {}) {
    Object.assign(this, props);
  }
}
