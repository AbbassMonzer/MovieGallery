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
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getData('movie','top_rated').subscribe(response =>{
      this.topRatedMovies = response.results.slice(0, 6);
      console.log("this.",this.topRatedMovies)
    })
  }

}
