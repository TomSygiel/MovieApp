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

  singleMovieDetail: IMovieProducts;

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(myMovieParams => {
      let id = myMovieParams.get('id'); // This will give you your id

      console.log("Id from component: ", id);

      this.getMovieDetail(+id);
    });
  }

  getMovieDetail(id: number) {
    this.service.getData().subscribe(data => {
      this.singleMovieDetail = data.find(a => a.id === id);

      // console.log(this.singleMovieDetail);
    });

  }

}
