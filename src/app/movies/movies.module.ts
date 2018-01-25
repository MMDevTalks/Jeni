import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';
import { MovieService } from '../core/services/movie.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [MovieService],
  exports: [DashboardComponent],
  declarations: [DashboardComponent]
})
export class MoviesModule { }
