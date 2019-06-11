import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IMovieProducts, ICategorySelector } from '../interfaces/IMovieProducts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  movies: IMovieProducts[];
  categories: ICategorySelector[];
  category: ICategorySelector;
  categoryMovies: IMovieProducts[];
  categorisedMovies: IMovieProducts[] = [];

  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.service.getCategories().subscribe(data => {
      this.categories = data;
    });

    //Show selected movies based on categories
    this.route.paramMap.subscribe(myParams => {
      let categoryId = +myParams.get('id');
      this.getSelectedCategory(+categoryId);

      this.service.getData().subscribe((dataMovies) => {
        this.movies = dataMovies;

        this.categorisedMovies = [];
        for (let i = 0; i < dataMovies.length; i++) {
          const categoryMovies = dataMovies[i];

          for (let j = 0; j < categoryMovies.productCategory.length; j++) {
          if (categoryId == categoryMovies.productCategory[j].categoryId) {
            this.categorisedMovies.push(categoryMovies);
          }
        }
      }
        console.log("This is: ", categoryId, this.categorisedMovies);

        console.log("12 Action(5)");
        console.log("10 Thriller(6)");
        console.log("10 Comedy(7)");
        console.log("10 Sci-fi(8)");

      });

     });
     
  }

   getSelectedCategory(id: number) {
     this.service.getCategories().subscribe(data => {
       this.category = data.find(a => a.id === id);
       console.log("Whole category: ", this.category);
     })
  }

}
