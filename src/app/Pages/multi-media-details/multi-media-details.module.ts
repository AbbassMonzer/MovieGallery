import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MultiMediaDetailsRoutingModule } from './multi-media-details-routing.module'
import { MultiMediaDetailsComponent } from './multi-media-details.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MultiMediaModule } from 'src/app/components/multi-media.module'
@NgModule({
  declarations: [MultiMediaDetailsComponent],
  imports: [
    CommonModule,
    MultiMediaDetailsRoutingModule,
    NgbModule,
    MultiMediaModule,
  ],
})
export class MultiMediaDetailsModule {}
