import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  public genreList = [];
test
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {

    this._apiService.getData('genre/tv', 'list').subscribe(response => {
      this.genreList = response.genres.slice(0, 3);
      for (let genre of this.genreList) {
        this._apiService.getData('discover', 'tv', genre.id, 'vote_average').subscribe(response => {
          genre.tv = response.results.slice(0, 3)
        })
      }
    })
  }

  getCategoryName(genre) {
    localStorage.setItem('category', genre.name);
  }


}
