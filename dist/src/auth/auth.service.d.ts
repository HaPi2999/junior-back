import { SignUpDto } from "./dto/sign-up.dto";
import UserEntity from "../entities/user.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";
import { MailService } from "../mail/mail.service";
export declare class AuthService {
    private usersRepository;
    private jwtService;
    private mailService;
    constructor(usersRepository: Repository<UserEntity>, jwtService: JwtService, mailService: MailService);
    sendCode(email: string): Promise<{
        statusCode: number;
        body: {
            status: boolean;
        };
    }>;
    signIn(body: SignInDto): Promise<{
        statusCode: number;
        body: {
            accessToken: string;
        };
    }>;
    signUp(body: SignUpDto): Promise<{
        statusCode: number;
        data: any;
    }>;
    findUserByEmail(email: string): Promise<UserEntity>;
    private updateAccessToken;
    private generateCode;
}
