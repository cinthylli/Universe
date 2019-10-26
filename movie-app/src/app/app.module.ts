import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { MovieCreateComponent } from './components/movie-create/movie-create.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SearchPipe } from "../app/components/pipes/search";
import { MovieService } from "./services/movie.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieListComponent,
    MoviePreviewComponent,
    MovieCreateComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
