import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { MovieCreateComponent } from "./components/movie-create/movie-create.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MoviePreviewComponent } from "./components/movie-preview/movie-preview.component";



const routes: Routes = [
  { path: 'items/', component: MovieListComponent },
  { path: 'items/new', component: MovieCreateComponent },
  { path: 'items/edit/:id', component: MoviePreviewComponent },
   { path: '', redirectTo: 'items/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
