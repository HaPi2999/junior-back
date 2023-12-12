"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../mail/mail.service");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService, mailService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async sendCode(email) {
        const user = await this.usersRepository.findOne({ where: { email } });
        user.code = this.generateCode();
        if (!await this.usersRepository.update(user.uuid, user)) {
            throw new common_1.BadRequestException('Произашла ошибка при записи в базу данных');
        }
        await this.mailService.sendUserConfirmation(email, user.code);
        return {
            statusCode: 200,
            body: {
                status: true
            }
        };
    }
    async signIn(body) {
        const user = await this.findUserByEmail(body.email);
        await this.updateAccessToken(user);
        return {
            statusCode: 200,
            body: {
                accessToken: user.accessToken
            }
        };
    }
    async signUp(body) {
        const user = new user_entity_1.default();
        user.email = body.email;
        user.username = body.username;
        user.password = (0, bcrypt_1.hashSync)(body.password, (0, bcrypt_1.genSaltSync)(20));
        user.code = this.generateCode();
        const savedUser = await this.usersRepository.save(user);
        if (!savedUser) {
            throw new common_1.BadRequestException('Ошибка при записи в базу данных');
        }
        await this.updateAccessToken(savedUser);
        return {
            statusCode: 200,
            data: {
                accessToken: savedUser.accessToken
            }
        };
    }
    async findUserByEmail(email) {
        return await this.usersRepository.findOne({ where: { email } });
    }
    async updateAccessToken(user) {
        user.accessToken = await this.jwtService.signAsync({
            uuid: user.uuid,
            email: user.email,
            surname: user.surname,
            username: user.username,
            patronymic: user.patronymic
        });
        if (!await this.usersRepository.update(user.uuid, user)) {
            throw new common_1.BadRequestException("Ошибка при записи в базу данных");
        }
    }
    generateCode() {
        return Math.floor(100000 + Math.random() * (999999 + 1 - 100000));
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map