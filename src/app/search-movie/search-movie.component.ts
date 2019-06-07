import { Component, OnInit, Input } from '@angular/core';
import { IMovieProducts, ICategorySelector } from '../interfaces/IMovieProducts';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  movies: IMovieProducts[];
  filteredMovies: IMovieProducts[];
  categories: ICategorySelector[];

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
    return this.filteredMovies.filter(movie => 
      movie.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0);
  }

  // reset(searchString: string) {
  //   this.searchTerm.reset(searchString);
  //   }
  // }

  constructor(private service: DataService) { 
  
  }

  ngOnInit() {

    //Show all movie selection
    this.service.getData().subscribe(movieList => {
        this.filteredMovies = movieList
        console.log(this.filteredMovies);
    });

    //Filter result
    this.filteredMovies = this.movies;

    this.service.getCategories().subscribe(data => {
      this.categories = data;
    });

  }

  openNav() {
    document.getElementById("mySidebar").style.width = "275px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

}
