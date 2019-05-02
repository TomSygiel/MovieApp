import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataService } from '../interfaces/IDataService';
import { Observable } from 'rxjs';
import { IMovieProducts } from '../interfaces/IMovieProducts';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  getData(): Observable<IMovieProducts[]> {
    return this.http.get<IMovieProducts[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  constructor(private http: HttpClient) { }
}
