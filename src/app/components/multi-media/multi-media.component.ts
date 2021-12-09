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
    if(multiMedia.title){
      this.route.navigate(['/multi-media-details',multiMedia.id,'movie']);
    }
    if(multiMedia.name){
      this.route.navigate(['/multi-media-details',multiMedia.id,'tv']);
    }
  }

}
