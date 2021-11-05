import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5434,
  username: "postgres",
  password: "postgres",
  database: "test",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: false,
  "migrations": ["dist/migrations/*{.ts,.js}"],
  "migrationsTableName": "migrations_typeorm",
  "migrationsRun": true
};
