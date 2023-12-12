import { Module } from '@nestjs/common'
import { TypeOrmModule } from "@nestjs/typeorm";
import UserEntity from "../entities/user.entity";
import { DefaultAdminModule, DefaultAdminSite } from "nestjs-admin";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    DefaultAdminModule
  ]
})
export class UserModule {
  constructor(private readonly adminSite: DefaultAdminSite) {
    // Register the User entity under the "User" section
    adminSite.register('User', UserEntity)
  }
}
