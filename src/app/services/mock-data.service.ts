import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';
import { Observable, of } from 'rxjs';
import { IMovieProducts, IOrderObject } from '../interfaces/IMovieProducts';

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
  
  constructor() { }
}
