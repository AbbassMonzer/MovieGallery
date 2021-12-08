import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movieList = [];
  public movieCategory = [];
  public selectedItem;
  pageOfItems: Array<any>;

  constructor(private _apiService: ApiService) { }


  ngOnInit(): void {
    this._apiService.getData('genre/movie', 'list').subscribe(response => {
      this.movieList = response.genres.slice(0, 3);
      console.log("movie", this.movieList)
    })


    // this._apiService.getData('discover','movie','878').subscribe(response =>{
    //   this.movieCategory = response.results.slice(0, 4);
    //   console.log("genre",this.movieCategory)
    // })

  }

  listClick(newValue) {
    this.selectedItem = newValue;
    let id = newValue.id;

    this._apiService.getData('discover', 'movie', id, 'vote_average').subscribe(response => {
      this.movieCategory = response.results.slice(0, 4);
      console.log("genre", this.movieCategory)
    })

  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}


