import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

// This components links to:
// -List of Movies
// - Upgrade movie

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
