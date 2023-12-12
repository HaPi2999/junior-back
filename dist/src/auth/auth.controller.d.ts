import { SignUpDto } from "./dto/sign-up.dto";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/sign-in.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(body: SignUpDto): Promise<{
        statusCode: number;
        data: any;
    }>;
    signIn(body: SignInDto): Promise<{
        statusCode: number;
        body: {
            accessToken: string;
        };
    }>;
    checkCode(): {
        status: number;
        body: {
            status: boolean;
        };
    };
    sendCode(email: string): Promise<{
        statusCode: number;
        body: {
            status: boolean;
        };
    }>;
}
