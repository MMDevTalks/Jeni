import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, IconComponent, MoviePosterComponent, SvgDefinitionsComponent, SpinnerComponent],
  exports: [ButtonComponent, IconComponent, MoviePosterComponent, SvgDefinitionsComponent, SpinnerComponent]
})
export class SharedModule { }
