import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadAllMoviesAction } from 'src/app/state/movies/movies.actions';
import { loadAMovielistSelector } from 'src/app/state/movies/movies.selector';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  $movieList = this.store.select(loadAMovielistSelector);
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(LoadAllMoviesAction())
  }

  loadMovies(): void{
    
  }
}
