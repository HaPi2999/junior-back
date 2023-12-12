import { ConfigModule, ConfigService } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { JwtModule } from "@nestjs/jwt"
import { MailModule } from "./mail/mail.module"
import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DefaultAdminModule } from 'nestjs-admin'
import { UserModule } from './user/user.module'
import { RestModule } from './rest/rest.module'
const AdminUser = require('nestjs-admin').AdminUserEntity

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        synchronize: true,
        entities: [__dirname + '/entities/**/*.entity{.js, .ts}', AdminUser],
      }),
      inject: [ConfigService],
    }),
    DefaultAdminModule,
    JwtModule.register({
      global: true,
      secret: 'kejnejrn!)(kjld!34nt5nekvne)_*&wprfef!@fyh62ewef',
      signOptions: { expiresIn: '1M' },
    }),
    AuthModule,
    MailModule,
    UserModule,
    RestModule
  ],
})
export class AppModule {}
