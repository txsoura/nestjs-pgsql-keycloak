import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "src/users/dtos/create-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(
    createUserDto: CreateUserDto
  ): Promise<User> {
    const { email, name, password } = createUserDto;

    const user = this.create();
    user.email = email;
    user.name = name;
    user.password = password;

    return user;
  }
}
