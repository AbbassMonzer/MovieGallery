import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MultiMediaComponent } from './multi-media/multi-media.component';

@NgModule({
  declarations: [MultiMediaComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[MultiMediaComponent ]
})
export class MultiMediaModule { }
