import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from "@angular/forms";
import { MovieService } from "../../services/movie.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  isSubmitted = false;
  movie: FormGroup;

  // Genre Names
  Genre: any = ["Action", "Adventure", "Crime", "Children's", "Comedy", "Crime", "Documentary", "Drama", "Fantasy", "Mistery", "Sci-Fi", "Thriller"];
  selectedGenres = [];
  assignedTitle: "";

  constructor(
    public fb: FormBuilder,
    private movieService: MovieService,
    private router: Router) { }

/*########### Form ###########*/
  registrationForm = this.fb.group({
    genreName: ['', [Validators.required]]
  })

  get genreName() {
    return this.registrationForm.get('genreName');
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      title: ['', Validators.required],
      genreName: ['', Validators.required]
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      this.selectedGenres = this.registrationForm.value.genreName;
      this.assignedTitle = this.registrationForm.value.title;
      this.movieService.createMovie(this.assignedTitle, this.selectedGenres)
        .subscribe(
          res => {
            this.router.navigate(['/items']);
          }, error => console.log(error)
        )
    }
  }

}
