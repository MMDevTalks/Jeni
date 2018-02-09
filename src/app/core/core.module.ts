import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "./guards/auth.guard";
import { AnonymousGuard } from "./guards/anonymous.guard";

import { AuthService } from "./services/auth.service";
import { MovieService } from "./services/movie.service";
import { AccountService } from "./services/account.service";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";

import { APP_INITIALIZER } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { accountLoader } from './services/account.autoloader';
import { AuthInterceptor } from 'app/core/services/auth.interceptor';

@NgModule({
  imports: [CommonModule, SharedModule, HttpClientModule],
  declarations: [],
  providers: [
    AuthGuard,
    AnonymousGuard,
    AuthService,
    MovieService,
    AccountService,
    {
      provide: APP_INITIALIZER,
      useFactory: accountLoader,
      deps: [AuthService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
