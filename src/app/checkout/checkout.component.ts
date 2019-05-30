import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMovieProducts, IOrderObject } from '../interfaces/IMovieProducts';
import { DataService } from '../services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  savedOrder: IOrderObject;
  
  singleMovieDetail: IMovieProducts;

  customerInfo = '';

  errorMessage= '';

  orderDateStamp = moment().format('LLLL');

  constructor(private service: DataService) {}

  ngOnInit() {

    console.log(this.orderDateStamp);
      
    this.savedOrder = JSON.parse(sessionStorage.getItem('orders'));

    if(this.savedOrder == null) {
      this.errorMessage = 'You have no orders pending, you will be redirected to Browse page';

      location.href = '';
    }

    else {

      if(this.savedOrder.status == 0) {
        this.customerInfo = '3-day access';
      }
        
      if(this.savedOrder.status == 1) {
        this.customerInfo = '7-day access';
      }
        
      if(this.savedOrder.status == 2) {
        this.customerInfo = '30-day access';
      }

    }

    this.getMovieDetail(this.savedOrder.orderRows[0].ProductId);
  }

  getMovieDetail(id: number) {
    this.service.getData().subscribe(data => {
      this.singleMovieDetail = data.find(a => a.id === id);
    });
  }

  email = new FormControl('');

  orderForm = new FormGroup({
    emailAddress: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])
    )
  });

  confirmOrder() {

    this.savedOrder = { 
      companyId: 10, 
      created: this.orderDateStamp, 
      createdBy: this.orderForm.value.emailAddress, 
      paymentMethod: null,
      totalPrice : this.savedOrder.totalPrice,
      status: this.savedOrder.status,
      orderRows: [{ ProductId: this.singleMovieDetail.id, Amount: 1}]
    }

    this.service.createOrder(this.savedOrder).subscribe(
      response => {
        console.log(response);
        
        sessionStorage.clear();

        location.href = '';
      }
    );

    

  }

}
