import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { MovieDetailsComponent } from './Pages/movie-details/movie-details.component';
import { MoviesComponent } from './Pages/movies/movies.component';
import { TvShowsDetailsComponent } from './Pages/tv-shows-details/tv-shows-details.component';
import { TvShowsComponent } from './Pages/tv-shows/tv-shows.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movie-details', component:MovieDetailsComponent},
  {path:'movies', component:MoviesComponent},
  {path:'tv-shows', component:TvShowsComponent},
  {path:'tv-shows-details', component:TvShowsDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


