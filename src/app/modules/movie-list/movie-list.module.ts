import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListRoutingModule } from './movie-list-routing.module';
import { CardModule, PanelModule } from 'src/app/common/core';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MovieListRoutingModule,
    CardModule,
    PanelModule
  ],
  exports: [MovieListComponent, MovieDetailsComponent, MovieListRoutingModule],
})
export class MovieListModule { }
