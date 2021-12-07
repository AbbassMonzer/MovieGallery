import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsDetailsComponent } from './pages/tv-shows-details/tv-shows-details.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';


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


