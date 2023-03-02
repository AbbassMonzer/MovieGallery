import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CategoriesRoutingModule } from './Categories-routing.module'
import { CategoriesComponent } from './categories.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MultiMediaModule } from 'src/app/components/multi-media.module'
@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, CategoriesRoutingModule, NgbModule, MultiMediaModule],
})
export class CategoriesModule {}
