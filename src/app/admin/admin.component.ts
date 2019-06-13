import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IOrderSummary, IMovieProducts } from '../interfaces/IMovieProducts';

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

  removeOrder(id: number) {
    var singleOrders = this.orderSummary;

    this.service.deleteOrder(id).subscribe(() => {
        for(var i = 0;i < singleOrders.length; i++) {
          if(singleOrders[i].id == id) {
            singleOrders.splice(i, 1);
          }
        }
    });

  }
}
