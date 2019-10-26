import { Pipe, PipeTransform } from "@angular/core";
import { Movie } from '../../interfaces/Movie';

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
    return movieList.filter((movies) => {
      return JSON.stringify(movies).toLowerCase().includes(movieSearched);
    })

  }
}
