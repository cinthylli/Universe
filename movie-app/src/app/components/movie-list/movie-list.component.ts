import { Component, OnInit } from '@angular/core';
import { Movie } from "../../interfaces/Movie";
import { MovieService } from '../../services/movie.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe(
      res => { this.movies = res},
      error => console.log(error)
    )
  }
  selectedMovie(id: string) {
    this.router.navigate(['/items/', id])

  }

  deleteMovie( id: string) {
    this.movieService.deleteMovie(id);
    return id;
  }
}
