import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-multi-media',
  templateUrl: './multi-media.component.html',
  styleUrls: ['./multi-media.component.css']
})
export class MultiMediaComponent implements OnInit {
  @Input() multiMedia: any;
  constructor(private route:Router)  { }

  ngOnInit(): void {

  }

  go(multiMedia){
    console.log("asdsf")
    if(multiMedia.title){
      this.route.navigate(['/movies']);
    }
    if(multiMedia.name){
      this.route.navigate(['/tv-shows']);
    }
  }

}
