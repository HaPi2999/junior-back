"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
const mail_module_1 = require("./mail/mail.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_admin_1 = require("nestjs-admin");
const user_module_1 = require("./user/user.module");
const AdminUser = require('nestjs-admin').AdminUserEntity;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env'
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USER'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    synchronize: true,
                    entities: [__dirname + '/entities/**/*.entity{.js, .ts}', AdminUser],
                }),
                inject: [config_1.ConfigService],
            }),
            nestjs_admin_1.DefaultAdminModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: 'kejnejrn!)(kjld!34nt5nekvne)_*&wprfef!@fyh62ewef',
                signOptions: { expiresIn: '1M' },
            }),
            auth_module_1.AuthModule,
            mail_module_1.MailModule,
            user_module_1.UserModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map