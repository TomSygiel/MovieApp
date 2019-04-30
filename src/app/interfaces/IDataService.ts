import { Observable } from 'rxjs';

export interface IDataService {
    getData(): Observable<IMovieProduct[]>
}