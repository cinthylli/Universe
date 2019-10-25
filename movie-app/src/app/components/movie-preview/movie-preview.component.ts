import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService} from "../../services/movie.service";
import { FormBuilder, Validators, FormControl, FormGroup } from "@angular/forms";
import { Movie } from "../../interfaces/Movie";

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent implements OnInit {
  Genre: any = ["Action", "Adventure", "Crime", "Children's", "Comedy", "Crime", "Documentary", "Drama", "Fantasy", "Mistery", "Sci-Fi", "Thriller"];
  selectedGenres: string;
  assignedTitle: string;
  assignedId: string;

  isSubmitted = false;
  id: string;
  movie: Movie;

  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private movieService: MovieService,
    public fb: FormBuilder
  ) { }

  /*########### Form ###########*/
  editForm = this.fb.group({
    genreName: ['', [Validators.required]]
  })

  get genreName() {
    return this.editForm.get('genreName');
  }

  get title() {
    return this.editForm.get('title');
  }

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.id = params['id'];
      this.movieService.getMovie(this.id).subscribe(
        res => {

          console.log(res);

          // this.selectedGenres = res.genre;
          // this.assignedTitle = res.name;
           this.movie = res;
        },
        error => console.log(error)
      )
    });

    // this.registrationForm = this.fb.group({
    //   title: [this.assignedTitle, Validators.required],
    //   genreName: [this.selectedGenres, Validators.required]
    // })

  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      // this.selectedGenres = this.editForm.value.genreName;
      // this.assignedTitle = this.editForm.value.title;
      this.movieService.editMovie( this.assignedId,this.assignedTitle, this.selectedGenres)
        .subscribe(
          res => {
            this.router.navigate(['/items']);
          }, error => console.log(error)
        )
    }
  }

  deleteMovie(id: string) {
    this.movieService.deleteMovie(id).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }
}
