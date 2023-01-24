import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: 'Movie Name',
    medium: 'Series',
    category: 'Sci-fi',
    year: 2023,
    watchedOn: 129000000,
    isFavorite: false
  };
}
