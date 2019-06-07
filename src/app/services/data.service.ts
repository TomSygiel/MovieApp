import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataService } from '../interfaces/IDataService';
import { Observable } from 'rxjs';
import { IMovieProducts, IOrderObject, IOrderSummary, ICategorySelector } from '../interfaces/IMovieProducts';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  getData(): Observable<IMovieProducts[]> {
    return this.http.get<IMovieProducts[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  constructor(private http: HttpClient) {
  }

  saveOrder(order: IOrderObject) {
    sessionStorage.setItem('orders', JSON.stringify(order));
  }
  
  createOrder(order: IOrderObject) {
    return this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order);
  }

  getAdminOrders(): Observable<IOrderSummary[]> {
    return this.http.get<IOrderSummary[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/?companyId=10');
  }

  deleteOrder(id: number): Observable<IOrderSummary[]> {
    return this.http.delete<IOrderSummary[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + id);
  }

  getCategories(): Observable<ICategorySelector[]> {
    return this.http.get<ICategorySelector[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
  }

  getMovieSearchResult(): Observable<IMovieProducts[]> {
    return this.http.get<IMovieProducts[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchTerm=');
  }
  
}

