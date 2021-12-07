import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-media',
  templateUrl: './multi-media.component.html',
  styleUrls: ['./multi-media.component.css']
})
export class MultiMediaComponent implements OnInit {
  @Input() multiMedia: any;
  constructor() { }

  ngOnInit(): void {
    console.log("muliMedia",this.multiMedia)
  }
}
