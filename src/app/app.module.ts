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
import { DetailsFormComponent } from './details-form/details-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { ModalComponent } from './modal/modal.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { MovieFilterPipe } from './filter/movie-filter.pipe';
import { SearchAndBrowseNavComponent } from './search-and-browse-nav/search-and-browse-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavigationComponent,
    HomeHeaderComponent,
    MovieDetailsComponent,
    DetailsNavComponent,
    DetailsFormComponent,
    CheckoutComponent,
    AdminComponent,
    PageNotFoundComponent,
    CategoriesComponent,
    ModalComponent,
    SearchMovieComponent,
    MovieFilterPipe,
    SearchAndBrowseNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
