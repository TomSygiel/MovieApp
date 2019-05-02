import { Component, OnInit } from '@angular/core';
import { IMovieProducts } from '../interfaces/IMovieProducts';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movies: IMovieProducts;

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(myMovieParams => {
      let id = +myMovieParams['id'] // This will give you your id

      console.log(id);

      this.service.getData().subscribe(data => {
        this.movies = data.find(a => a.id === id);
      })

      console.log(this.movies);
    
    });
  }

}
