import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IMovieProducts, ICategorySelector } from '../interfaces/IMovieProducts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: IMovieProducts[];
  categories: ICategorySelector[];
  category: ICategorySelector;
  categoryMovies: IMovieProducts[];
  categorisedMovies = [];

  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

    //Show all movie selection
    this.service.getData().subscribe(movieList => {
        this.movies = movieList
        console.log(this.movies);
      }
    );

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
