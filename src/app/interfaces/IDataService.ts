import { Observable } from 'rxjs';
import { IMovieProducts } from './IMovieProducts';

export interface IDataService {
    getData(): Observable<IMovieProducts[]>
}