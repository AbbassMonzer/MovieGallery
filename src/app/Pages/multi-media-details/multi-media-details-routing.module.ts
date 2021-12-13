import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MultiMediaDetailsComponent } from './multi-media-details.component';

/////////////////////
const routes: Routes = [
  {
    path: "",
    component: MultiMediaDetailsComponent
  }

];
/////////////////////
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  /////////////////////
  export class MultiMediaDetailsRoutingModule {}
