import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IMovieProducts } from '../interfaces/IMovieProducts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: IMovieProducts[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getData().subscribe(
      movieList => {
        this.movies = movieList
        console.log(this.movies);
      }
    );
  }
}
