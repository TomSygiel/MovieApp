import { Observable } from 'rxjs';
import { IMovieProducts, IOrderSummary, ICategorySelector } from './IMovieProducts';

export interface IDataService {

    getData(): Observable<IMovieProducts[]>

    getAdminOrders(): Observable<IOrderSummary[]>

    getCategories(): Observable<ICategorySelector[]>;

    getMovieSearchResult(): Observable<IMovieProducts[]>;

}