import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { movieDetails, movieslistRoute } from 'src/app/shared/constants/route.constant';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list.component';


const routes: Routes = [
    {
        path: movieslistRoute,
        component: MovieListComponent,
    },

    {
        path: movieDetails,
        component:  MovieDetailsComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieListRoutingModule { }

