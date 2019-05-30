import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IOrderSummary, IMovieProducts } from '../interfaces/IMovieProducts';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { SinglePropOffsetValuesIndex } from '@angular/core/src/render3/interfaces/styling';
import { markParentViewsForCheck } from '@angular/core/src/view/util';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  orderSummary: IOrderSummary[];

  singleMovieDetail: IMovieProducts[] = [];

  constructor( private service: DataService ) { }

  ngOnInit() {

    this.service.getAdminOrders().subscribe(orderList => {
        this.orderSummary = orderList
        this.orderSummary.forEach(eachOrder => {
          this.singleMovieDetail,
          eachOrder.created, eachOrder.createdBy, eachOrder.totalPrice
          console.log(this.singleMovieDetail[name], eachOrder.created, eachOrder.createdBy, eachOrder.totalPrice);
        });

        this.orderSummary.map((order) => {
          this.service.getData().subscribe(movies => {
            let movie = movies.find(m => m.id === order.orderRows[0].productId);

            this.singleMovieDetail.push(movie);

            console.log(movie.name);
          })
          
        });

        console.log(this.orderSummary);
      }
    );

  }

  removeOrder(id) {
    var singleOrders = this.orderSummary;

    this.service.deleteOrder(id).subscribe(data => {
        for(var i = 0;i < singleOrders.length; i++) {
          if(singleOrders[i].id == id) {
            singleOrders.splice(i, 1);
          }
        }
    });

  }
}

// interface IOrderPresentation {
//   id: number;
//   product: IMovieProducts[];
//   date: string;
//   email:string;
//   planPrice: number;
// }

//   this.orderPresentation.push({
        //     id: order.orderRows[0].productId,
        //     product: this.singleMovieFromOrder,
        //     date: order.created,
        //     email: order.createdBy,
        //     planPrice: order.totalPrice
        //   });
        // });

        // console.log(this.orderPresentation);

