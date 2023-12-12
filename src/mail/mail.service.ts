import { RestService } from './../rest/rest.service';
import { Injectable } from "@nestjs/common"
import { MailerService } from "@nestjs-modules/mailer"

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private restService: RestService
    ) {}

  async sendUserConfirmation(email: string, code: number) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './confirmation.pug',
      context: {
        code: code
      },
    })
  }
}