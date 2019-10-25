import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService} from "../../services/movie.service";
import { Movie } from "../../interfaces/Movie";

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent implements OnInit {

  id: string;
  movie: Movie;

  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.id = params['id'];
      this.movieService.getMovie(this.id).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    })
  }

  

  editAndUploadMovie(title: HTMLTextAreaElement, genre: HTMLSelectElement) {

  }
}
