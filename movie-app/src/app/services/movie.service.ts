import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { Movie }  from '../interfaces/Movie';
import { v4 as uuid } from 'uuid';

// This service helps to conect with the API
// http://35.232.123.59:4000 . I use proxy.conf.json
// because appear a error with CORS "No access control to origin"


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movie: Movie;
  API_ENDPOINT = "/items";

  constructor(private httpClient: HttpClient) { }

  getAllMovies() {
    return this.httpClient.get<Movie[]>(this.API_ENDPOINT );
  }

  getMovie(id: string) {
    return this.httpClient.get<Movie>(this.API_ENDPOINT + "/" + id);
  }

  deleteMovie(id: string) {
    return this.httpClient.delete<Movie>(this.API_ENDPOINT + "/" + id)
  }

  createMovie(pTitle: string, pGenre: string) {

    this.movie = {
      id: uuid(),
      name : pTitle,
      genre: pGenre
    }
    return this.httpClient.post<Movie>(this.API_ENDPOINT, this.movie);
  }

  editMovie(pId: string, pTitle: string, pGenre: string) {
    this.movie = {
      id: pId,
      name : pTitle,
      genre: pGenre
    }
    return this.httpClient.put<Movie>(this.API_ENDPOINT + "/" + pId, this.movie);
  }

}
