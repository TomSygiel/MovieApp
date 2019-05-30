import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';
import { Observable, of } from 'rxjs';
import { IMovieProducts, IOrderObject, IOrderSummary } from '../interfaces/IMovieProducts';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {

  movies: IMovieProducts[] = [
    {id: 1, name: 'Movie One', price: 100, imageUrl: 'https://bit.ly/2Wgcmpx', description: 'Really a good movie!'},
    {id: 2, name: 'Movie Two', price: 150, imageUrl: 'https://bit.ly/2Wgcmpx', description: 'Really a great movie!'},
    {id: 3, name: 'Movie Three', price: 200, imageUrl: 'https://bit.ly/2Wgcmpx', description: 'Really a best movie!'}
  ]

  getData(): Observable<IMovieProducts[]> {
    return of(this.movies);
  }

  orders: IOrderObject[] = [
    {companyId: 10, created: "0001-01-01T00:00:00", createdBy: null, paymentMethod: null, totalPrice: 0,status: 0, orderRows: [{Amount: 1, ProductId: 1}]}
  ] 

  setOrders(): Observable<IOrderObject[]> {
    return of(this.orders);
  }

  orderSummary: IOrderSummary[] = [
    {id:601, companyId: 10, created: "2019-05-20T14:45:00", createdBy: "tom@mail.com", paymentMethod: null,totalPrice: 200, status: 1, orderRows: [{id: 1030, productId: 1, amount:1, orderId:601}]}
  ]

  getAdminOrders(): Observable<IOrderSummary[]> {
    return of(this.orderSummary);
  }

  deleteOrder(): Observable<IOrderSummary[]> {
    return of(this.orderSummary);
  }

  constructor() { }
}
