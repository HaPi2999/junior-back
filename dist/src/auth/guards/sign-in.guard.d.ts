import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from 'rxjs';
import { AuthService } from "../auth.service";
export declare class SignInGuard implements CanActivate {
    private authService;
    constructor(authService: AuthService);
    canActivate(context: ExecutionContext): Promise<boolean> | Observable<boolean>;
}
