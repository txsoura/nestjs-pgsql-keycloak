import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["email"])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false, type: "varchar", length: 200 })
  email: string;

  @Column({ nullable: false, type: "varchar", length: 200 })
  name: string;

  @Column({ nullable: false, type: "varchar" })
  password: string;
}
