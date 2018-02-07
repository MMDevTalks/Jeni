import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { AnonymousGuard } from './guards/anonymous.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthGuard, AnonymousGuard]
})
export class CoreModule { }
