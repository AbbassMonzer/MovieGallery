import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  public tvList = [];
  public tvCategory = [];
  public selectedItem;
  constructor(private _apiService: ApiService) { }


  ngOnInit(): void {

    this._apiService.getData('genre/tv','list').subscribe(response =>{
      this.tvList = response.genres.slice(0,3)
      console.log("movie",this.tvList)
    })

    // this._apiService.getData('discover','movie','878').subscribe(response =>{
    //   this.tvCategory = response.results.slice(0, 4);
    //   console.log("genre",this.tvCategory)
    // })

  }

  listClick(newValue){
    this.selectedItem = newValue;
    let id = newValue.id;

    this._apiService.getData('discover','tv',id,'vote_average').subscribe(response =>{
      this.tvCategory = response.results.slice(0, 4);
      console.log("genre",this.tvCategory)
    })

  }


}
