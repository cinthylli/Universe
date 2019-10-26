import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService} from "../../services/movie.service";
import { Movie } from "../../interfaces/Movie";
import { analyzeAndValidateNgModules } from '@angular/compiler';

// This component edit the movie related with the id that comes in the URL

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
        this.movieService.getMovie(this.id)
        .subscribe( res => this.movie = res,  err => console.log(err))
      })
    }

    editAndUploadMovie(title: HTMLTextAreaElement, genre: HTMLSelectElement): boolean{
      this.movieService.getMovie(this.id)
      .subscribe(
        res => {
          console.log("Esta es la pelicula a editar: ")
          console.log(res);
          this.router.navigate(['preview-movie/']);
        },
        error => console.log(error)
        );
        return false;
      }

    }
