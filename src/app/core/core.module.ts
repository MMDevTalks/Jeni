import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, MoviePosterComponent
  ],
  declarations: [HeaderComponent, MoviePosterComponent, SearchComponent]
})
export class CoreModule { }
