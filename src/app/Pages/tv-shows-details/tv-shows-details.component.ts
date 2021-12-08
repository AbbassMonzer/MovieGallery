import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-tv-shows-details',
  templateUrl: './tv-shows-details.component.html',
  styleUrls: ['./tv-shows-details.component.css']
})
export class TvShowsDetailsComponent implements OnInit {
  public id:any;
  public tvDetails = [];
  constructor(private activatedRoute: ActivatedRoute,private _apiService: ApiService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this._apiService.getData('movie',this.id).subscribe(response =>{
      this.tvDetails = response
      console.log("tvDetails",this.tvDetails)
    })
  }
}
