import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public genreList = [];

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getData('genre/movie', 'list').subscribe(response => {
      this.genreList = response.genres.slice(0, 3);
      for (let genre of this.genreList) {
        this._apiService.getData('discover', 'movie', genre.id, 'vote_average').subscribe(response => {
          genre.movies = response.results.slice(0, 3)
        })
      }
    })
  }


}


