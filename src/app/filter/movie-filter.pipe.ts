import { PipeTransform, Pipe } from '@angular/core';
import { IMovieProducts } from '../interfaces/IMovieProducts';

@Pipe({
    name: 'movieFilter'
})

export class MovieFilterPipe implements PipeTransform {
    transform(movies: IMovieProducts[], searchTerm: string): IMovieProducts[] {
        if (!movies || !searchTerm) {
            return movies;
        }

        return movies.filter(movie => 
            movie.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== 1);
    }
}