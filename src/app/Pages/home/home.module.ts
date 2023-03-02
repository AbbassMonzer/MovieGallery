import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MultiMediaModule } from 'src/app/components/multi-media.module'
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NgbModule, MultiMediaModule],
})
export class HomeModule {}
