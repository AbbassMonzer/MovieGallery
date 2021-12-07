import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  categories = ["red","blue"];
  constructor() { }

  ngOnInit(): void {
  }

}
