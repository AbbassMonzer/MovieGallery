import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Common-Components/header/header.component';
import { FooterComponent } from './Common-Components/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { MoviesComponent } from './Pages/movies/movies.component';
import { MovieDetailsComponent } from './Pages/movie-details/movie-details.component';
import { TvShowsComponent } from './Pages/tv-shows/tv-shows.component';
import { TvShowsDetailsComponent } from './Pages/tv-shows-details/tv-shows-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    MovieDetailsComponent,
    TvShowsComponent,
    TvShowsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
