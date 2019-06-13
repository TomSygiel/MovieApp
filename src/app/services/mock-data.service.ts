import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';
import { Observable, of } from 'rxjs';
import { IMovieProducts, IOrderObject, IOrderSummary, ICategorySelector } from '../interfaces/IMovieProducts';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {

  //Movie mock data and function to retrive it
  movies: IMovieProducts[] = [
    {id: 1, name: 'Movie One', price: 100, imageUrl: 'https://bit.ly/2Wgcmpx', year: 2000,  description: 'Really a good movie!', productCategory: [{categoryId: 1, category: null}]},
    {id: 2, name: 'Movie Two', price: 150, imageUrl: 'https://bit.ly/2Wgcmpx', year: 2000, description: 'Really a great movie!', productCategory: [{categoryId: 2, category: null}]},
    {id: 3, name: 'Movie Three', price: 200, imageUrl: 'https://bit.ly/2Wgcmpx', year: 2000, description: 'Really a best movie!', productCategory: [{categoryId: 3, category: null}]}
  ]

  getData(): Observable<IMovieProducts[]> {
    return of(this.movies);
  }

  //Movie mock data search function
  getMovieSearchResult(): Observable<IMovieProducts[]> {
    return of(this.movies);
  }

  //Single order mock data and relevant functions to set the order
  orders: IOrderObject[] = [
    {id: 123, companyId: 10, created: "0001-01-01T00:00:00", createdBy: null, paymentMethod: null, totalPrice: 0,status: 0, orderRows: [{Amount: 1, ProductId: 1}]}
  ] 

  setOrders(): Observable<IOrderObject[]> {
    return of(this.orders);
  }

  //Order summary mock data and functions to retrive the information from data base and to delete relevant order
  orderSummary: IOrderSummary[] = [
    {id:601, companyId: 10, created: "2019-05-20T14:45:00", createdBy: "tom@mail.com", paymentMethod: null,totalPrice: 200, status: 1, orderRows: [{id: 1030, productId: 1, amount:1, orderId:601}]}
  ]

  createOrder(order: IOrderObject): Observable<IOrderObject> {
    return of(this.orders[0]);
  }

  getAdminOrders(): Observable<IOrderSummary[]> {
    return of(this.orderSummary);
  }

  deleteOrder(): Observable<IOrderSummary[]> {
    return of(this.orderSummary);
  }

  //Categories mock data and function to call for it
  movieCategories: ICategorySelector[] = [
    { id: 1, name: 'Thriller' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Sci-fi' },
    { id: 4, name: 'Horror' }
  ];

  getCategories(): Observable<ICategorySelector[]> {
    return of(this.movieCategories);
  };

  constructor() { }
}
