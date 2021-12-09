import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public id:any;
  public movieDetails = [];
  public type:string;
  constructor(private activatedRoute: ActivatedRoute,private _apiService: ApiService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.type = this.activatedRoute.snapshot.paramMap.get("type");
    this._apiService.getData(this.type ,this.id).subscribe(response =>{
      this.movieDetails = response;
    })
  }

}
