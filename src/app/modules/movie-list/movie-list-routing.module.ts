import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/guards/login.guards';
import { movieDetails, movieslistRoute } from 'src/app/shared/constants/route.constant';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list.component';


const routes: Routes = [
    {
        path: movieslistRoute,
        component: MovieListComponent,
        canActivate: [LoginGuard]
    },

    {
        path: movieDetails,
        component:  MovieDetailsComponent,
        canActivate: [LoginGuard]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieListRoutingModule { }

