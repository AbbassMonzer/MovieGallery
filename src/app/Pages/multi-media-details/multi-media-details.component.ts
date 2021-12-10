import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-multi-media-details',
  templateUrl: './multi-media-details.component.html',
  styleUrls: ['./multi-media-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public id:any;
  public multiMediaDetails = [];
  public type:string;
  constructor(private activatedRoute: ActivatedRoute,private _apiService: ApiService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.type = this.activatedRoute.snapshot.paramMap.get("type");
    this._apiService.getData(this.type ,this.id).subscribe(response =>{
      this.multiMediaDetails = response;
    })
  }

}
