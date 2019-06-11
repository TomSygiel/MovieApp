import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { DataService } from '../services/data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteStub } from '../testing/activated-route-stub';
import { MockDataService } from '../services/mock-data.service';
import { ActivatedRoute } from '@angular/router';
import { DetailsFormComponent } from '../details-form/details-form.component';
import { DetailsNavComponent } from '../details-nav/details-nav.component';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  let activatedRoute = new ActivatedRouteStub({id: 1});

  beforeEach(async(() => {
    activatedRoute.setParams({ id: 1 });
    TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent, DetailsFormComponent, DetailsNavComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [ { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: DataService, useClass: MockDataService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return id', () => {
    component.getMovieDetail(2);
    expect(component.singleMovieDetail).toBeDefined();
    expect(component.singleMovieDetail.name).toBe('Movie Two');
  });
});
