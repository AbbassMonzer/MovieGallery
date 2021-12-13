import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsRoutingModule } from './tv-shows-routing.module'
import { TvShowsComponent } from './tv-shows.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiMediaModule } from 'src/app/components/multi-media.module';
@NgModule({
  declarations: [TvShowsComponent],
  imports: [
    CommonModule,
    TvShowsRoutingModule,
    NgbModule,
    MultiMediaModule
  ]
})
export class TvShowsModule { }
