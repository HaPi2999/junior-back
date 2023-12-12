"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const common_1 = require("@nestjs/common");
const mail_service_1 = require("./mail.service");
const mailer_1 = require("@nestjs-modules/mailer");
const path_1 = require("path");
const pug_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/pug.adapter");
let MailModule = class MailModule {
};
exports.MailModule = MailModule;
exports.MailModule = MailModule = __decorate([
    (0, common_1.Module)({
        providers: [mail_service_1.MailService],
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: "smtp.gmail.com",
                    secure: true,
                    port: 465,
                    auth: {
                        user: "fedyakov.mikhail@gmail.com",
                        pass: "pgfj ebrg iayd tgew",
                    },
                },
                defaults: {
                    from: "fedyakov.mikhail@gmail.com",
                },
                template: {
                    dir: (0, path_1.join)(__dirname, 'templates'),
                    adapter: new pug_adapter_1.PugAdapter(),
                    options: {
                        strict: true,
                    },
                }
            })
        ],
        exports: [mail_service_1.MailService]
    })
], MailModule);
//# sourceMappingURL=mail.module.js.map