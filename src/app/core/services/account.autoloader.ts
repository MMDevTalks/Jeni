import { AuthService } from './auth.service';

export function accountLoader(AuthService: AuthService) {
    return () => (AuthService.getAccountAsync()).toPromise().catch((error) => {
        return true;
    });
}
