import { Observable } from 'rxjs';
import { IMovieProducts, IOrderSummary } from './IMovieProducts';

export interface IDataService {

    getData(): Observable<IMovieProducts[]>

    getAdminOrders(): Observable<IOrderSummary[]>

}