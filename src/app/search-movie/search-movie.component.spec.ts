import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieComponent } from './search-movie.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsNavComponent } from '../details-nav/details-nav.component';
import { MovieFilterPipe } from '../filter/movie-filter.pipe';
import { HttpClientModule } from '@angular/common/http';

describe('SearchMovieComponent', () => {
  let component: SearchMovieComponent;
  let fixture: ComponentFixture<SearchMovieComponent>;
  let filterPipe: MovieFilterPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SearchMovieComponent,
        DetailsNavComponent,
        MovieFilterPipe
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    filterPipe = new MovieFilterPipe();
    fixture = TestBed.createComponent(SearchMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should be instanciated', () => {
    expect(filterPipe).toBeDefined();
  });

  // it('should filter correctly', () => {
  //   const movies = [];

  //   movies.push({id: 1, name: 'Movie One', price: 100, imageUrl: 'https://bit.ly/2Wgcmpx', description: 'Really a good movie!', productCategory: [{categoryId: 1, category: null}]});
  //   movies.push({id: 2, name: 'Movie Two', price: 150, imageUrl: 'https://bit.ly/2Wgcmpx', description: 'Really a great movie!', productCategory: [{categoryId: 2, category: null}]});
  //   movies.push({id: 3, name: 'Movie Three', price: 200, imageUrl: 'https://bit.ly/2Wgcmpx', description: 'Really a best movie!', productCategory: [{categoryId: 3, category: null}]});

  //   // component.searchForMovieTitle(1);
    
  //   const filtered = filterPipe.transform(movies, 'name', 'Movie One');
  //   expect(filtered.length).toBe(1);

  // });

});
