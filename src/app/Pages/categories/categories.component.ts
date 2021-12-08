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
  pageOfItems: Array<any>;
  public id:any;
  constructor(private activatedRoute: ActivatedRoute,private _apiService: ApiService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this._apiService.getData('discover', 'movie', this.id,).subscribe(response => {
      this.movieCategory = response.results;
      console.log("genre", this.movieCategory)
    })
  }


  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
