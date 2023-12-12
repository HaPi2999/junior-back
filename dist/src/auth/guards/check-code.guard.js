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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCodeGuard = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth.service");
let CheckCodeGuard = class CheckCodeGuard {
    constructor(authService) {
        this.authService = authService;
    }
    async canActivate(context) {
        const { email, code } = context.switchToHttp().getRequest().body;
        if (!email) {
            throw new common_1.BadRequestException("Email не может быть пустым");
        }
        if (!code) {
            throw new common_1.BadRequestException("Код не может быть пустым");
        }
        const user = await this.authService.findUserByEmail(email);
        if (!user || (user.code !== Number(code))) {
            throw new common_1.UnauthorizedException("Неверный код");
        }
        return true;
    }
};
exports.CheckCodeGuard = CheckCodeGuard;
exports.CheckCodeGuard = CheckCodeGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], CheckCodeGuard);
//# sourceMappingURL=check-code.guard.js.map