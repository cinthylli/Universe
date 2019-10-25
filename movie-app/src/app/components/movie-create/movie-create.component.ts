import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MovieService } from "../../services/movie.service";


@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})

export class MovieCreateComponent implements OnInit {

  constructor(
    private router: Router,
    private movieService: MovieService
    ) { }

  ngOnInit() {
  }

  uploadMovie(title: HTMLTextAreaElement, genre: HTMLSelectElement){
    this.movieService.createMovie(title.value, genre.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
