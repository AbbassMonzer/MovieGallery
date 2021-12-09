import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public topRatedMovies = [];
  public topRatedTVShows = [];
  public genreList = [];
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getData('movie','top_rated').subscribe(response =>{
      this.topRatedMovies = response.results.slice(0, 6);
    })

    this._apiService.getData('tv','top_rated').subscribe(response =>{
      this.topRatedTVShows = response.results.slice(0, 6);
    })

    this._apiService.getData('genre/movie','list').subscribe(response => {
      this.genreList = response.genres;
      for (let genre of this.genreList) {
        this._apiService.getData('discover', 'movie', genre.id).subscribe(response => {
          genre.movies = response.results.slice(0, 3)
        })
      }
    })
  }

}

