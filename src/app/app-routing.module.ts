import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { defaultRoute } from './shared/constants/route.constant';

const routes: Routes = [
{
    path: defaultRoute,
    loadChildren: () => import('../app/modules/login/login.module').then(m => m.LoginModule),
},
{
  path: defaultRoute,
  loadChildren: () => import('../app/modules/movie-list/movie-list.module').then(m => m.MovieListModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
