import { Injectable, NotFoundException, UnprocessableEntityException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "src/users/user.repository";
import { CreateUserDto } from "src/users/dtos/create-user.dto";
import { User } from "src/users/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password != createUserDto.passwordConfirmation) {
      throw new UnprocessableEntityException("As senhas não conferem");
    } else {
      return this.userRepository.createUser(createUserDto);
    }
  }

  async getUser(userId: string): Promise<User> {
    const user = await this.userRepository.findOne(userId, {
      select: ["email", "name", "id"]
    });

    if (!user) throw new NotFoundException("Usuário não encontrado");

    return user;
  }
}
