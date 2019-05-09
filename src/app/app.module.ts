import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HomeNavigationComponent } from './home-navigation/home-navigation.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { DetailsNavComponent } from './details-nav/details-nav.component';
// import { DummyComponent } from './movie-details/movie-details.component.spec';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavigationComponent,
    HomeHeaderComponent,
    MovieDetailsComponent,
    DetailsNavComponent,
    // DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
