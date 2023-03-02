import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesRoutingModule } from './movies-routing.module'
import { MoviesComponent } from './movies.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MultiMediaModule } from 'src/app/components/multi-media.module'
@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, MoviesRoutingModule, NgbModule, MultiMediaModule],
})
export class MoviesModule {}
