import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MultiMediaResolverService } from './resolvers/multi-media.resolver'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'multi-media-details/:id/:type',
    loadChildren: () =>
      import('./pages/multi-media-details/multi-media-details.module').then(
        m => m.MultiMediaDetailsModule
      ),
    resolve: { multiMediaResolver: MultiMediaResolverService },
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.module').then(m => m.MoviesModule),
  },
  {
    path: 'tv-shows',
    loadChildren: () =>
      import('./pages/tv-shows/tv-shows.module').then(m => m.TvShowsModule),
  },
  {
    path: 'categories/:id/:type',
    loadChildren: () =>
      import('./pages/categories/categories.module').then(
        m => m.CategoriesModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact-us/contact-us.module').then(
        m => m.ContactUsModule
      ),
  },
]

@NgModule({
  // imports: [RouterModule.forRoot(routes)],

  // exports: [RouterModule],

  providers: [MultiMediaResolverService],
})
export class AppRoutingModule {}
