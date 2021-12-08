import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwPaginationModule  } from 'jw-angular-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvShowsDetailsComponent } from './pages/tv-shows-details/tv-shows-details.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { MultiMediaComponent } from './components/multi-media/multi-media.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    MovieDetailsComponent,
    TvShowsComponent,
    TvShowsDetailsComponent,
    MultiMediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwPaginationModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
