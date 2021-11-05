import { Body, Controller, Get, Param, Post, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "src/users/dtos/create-user.dto";
import { ResponseUserDto } from "src/users/dtos/response-user.dto";
import { Unprotected } from "nest-keycloak-connect";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  //public
  @Post()
  @Unprotected()
  async createUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto
  ): Promise<ResponseUserDto> {
    const user = await this.usersService.createUser(createUserDto);
    return {
      user,
      message: "Cadastrado com sucesso"
    };
  }

  //private to user
  @Get(":id")
  async findUserById(@Param("id") id): Promise<ResponseUserDto> {
    const user = await this.usersService.getUser(id);
    return {
      user,
      message: "Usuário encontrado"
    };
  }
}
