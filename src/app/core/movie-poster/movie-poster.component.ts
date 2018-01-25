import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'mm-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {

  movies: Movie;
  @Input('movie') movie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
