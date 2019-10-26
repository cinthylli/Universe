import { Pipe, PipeTransform } from "@angular/core";
import { Movie } from '../../interfaces/Movie';
import { identifierModuleUrl } from '@angular/compiler';

// This pipe allows to search movies by id, title and genre

@Pipe({
  name: "search"
})

export class SearchPipe implements PipeTransform {
  public transform(movieList, movieSearched: string) {
    if (!movieList) {
      return;
    }

    if (!movieSearched) {
      return movieList;
    }

    movieSearched.toLowerCase();
    return movieList.filter((movies: Movie) => {
      return JSON.stringify(movies).toLowerCase().includes(movieSearched);
    })

  }
}
