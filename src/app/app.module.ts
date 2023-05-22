import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { MovieListModule } from './modules/movie-list/movie-list.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    LoginModule,
    MovieListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
