import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { defaultRoute, loginRoute } from 'src/app/shared/constants/route.constant';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: defaultRoute, redirectTo: loginRoute, pathMatch: 'full' },
  {
    path: loginRoute,
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }