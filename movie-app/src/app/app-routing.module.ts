import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { MovieCreateComponent } from "./components/movie-create/movie-create.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MoviePreviewComponent } from "./components/movie-preview/movie-preview.component";



const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch:'full'},
  { path: 'movies', component: MovieListComponent },
  { path: 'create-movie', component: MovieCreateComponent },
  { path: 'preview-movie/:id', component: MoviePreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
