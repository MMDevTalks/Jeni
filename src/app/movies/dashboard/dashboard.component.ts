import { Component, OnInit } from '@angular/core';
import { Movie } from '../../core/models/movie';
import { MovieService } from '../../core/services/movie.service';


@Component({
  selector: 'mm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) { }

  getMovies(): void {
    this.movies = this.movieService.getMovies();
  }

  ngOnInit() {
    this.getMovies();
  }

}
