import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getData('movie','popular').subscribe(response =>{
      console.log("response",response)
    })
  }

}
