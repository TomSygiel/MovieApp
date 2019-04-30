import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';
import { Observable, of } from 'rxjs';
import { IMovieProducts } from '../interfaces/IMovieProducts';

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

  constructor() { }
}
