import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/multi-media-details/multi-media-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'multi-media-details/:id/:type', component:MovieDetailsComponent},
  {path:'movies', component:MoviesComponent},
  {path:'tv-shows', component:TvShowsComponent},
  {path:'categories/:id/:type', component:CategoriesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


