import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
  UnauthorizedException
} from "@nestjs/common"
import { Observable } from 'rxjs'
import { AuthService } from "../auth.service"
import { compareSync } from "bcrypt"

@Injectable()
export class CheckCodeGuard implements CanActivate {
  constructor(
    private authService: AuthService
  ) {}

  // @ts-ignore
  async canActivate(context: ExecutionContext): Promise<boolean> | Observable<boolean> {
    const { email, code } = context.switchToHttp().getRequest().body

    if (!email) {
      throw new BadRequestException("Email не может быть пустым")
    }

    if (!code) {
      throw new BadRequestException("Код не может быть пустым")
    }

    const user = await this.authService.findUserByEmail(email)

    if (!user || (user.code !== Number(code))) {
      throw new UnauthorizedException("Неверный код")
    }

    return true
  }
}