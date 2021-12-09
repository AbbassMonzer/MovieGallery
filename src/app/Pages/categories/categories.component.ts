import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public movieCategory = [];
  public id: any;
  public type: string;
  pageSize = 20
  page = 1
  collectionSize = 120
  constructor(private activatedRoute: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.type = this.activatedRoute.snapshot.paramMap.get("type");
    this.getCategoryData();
  }


  paginate() {
    if (this.movieCategory) {
      this.movieCategory = this.movieCategory.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
    this.getCategoryData();
  }

  getCategoryData() {
    const params = new HttpParams().set('with_genres', this.id).append('page', this.page.toString())
    this._apiService.getDataTwo('discover', this.type, params).subscribe(response => {
      this.movieCategory = response.results;
    })
  }

}
