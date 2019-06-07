import { Component, OnInit, Input } from '@angular/core';
import { IMovieProducts, ICategorySelector } from '../interfaces/IMovieProducts';
import { DataService } from '../services/data.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  movies: IMovieProducts[];
  filteredMovies: IMovieProducts[];
  categories: ICategorySelector[];

  //Code for searchQuery
  // results: any[] = [];
  // searchQuery: FormControl = new FormControl();

  //Code for searchTerm and NgModel
  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredMovies = this.searchForMovieTitle(value);
  }

  searchForMovieTitle(searchString: string) {
    return this.movies.filter(movie => 
      movie.name.toLowerCase().indexOf(searchString.toLowerCase()) !== 1);
  }

  constructor(private service: DataService, private http: HttpClient) { 
    http.get<IMovieProducts[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/search').subscribe(result => {
      this.movies = result;
      this.filteredMovies = result;
    });
  }

  ngOnInit() {

    // this.movies = this.service.getData();

    this.filteredMovies = this.movies;

    //Code for searchQuery
    // this.searchQuery.valueChanges.subscribe( result => {
    //   console.log(result);
    // });
-
    // this.searchQuery.valueChanges
    // .subscribe(searchQuery => this.service.getMovieSearchResult(searchQuery)
    // .subscribe(movieSearchResult => {
    //     this.movies = movieSearchResult
    //     console.log(this.movies);
    // }));

     //Show all movie selection
    this.service.getData().subscribe(movieList => {
        this.filteredMovies = movieList
        console.log(this.filteredMovies);
    });

    this.service.getCategories().subscribe(data => {
      this.categories = data;
    });

  }

  // searchForMovieTitle() {
    // this.service.getMovieSearchResult().subscribe(movieSearchResult => {
    //   this.movies = movieSearchResult
    //   console.log(this.movies);
    // });

    // this.searchQuery.valueChanges
    // .subscribe(searchQuery => this.service.getMovieSearchResult(searchQuery)
    // .subscribe(movieSearchResult => {
    //     this.movies = movieSearchResult
    //     console.log(this.movies);
    // }));
  // }

  openNav() {
    document.getElementById("mySidebar").style.width = "275px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

}
