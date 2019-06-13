import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeHeaderComponent } from '../home-header/home-header.component';
import { SearchAndBrowseNavComponent } from '../search-and-browse-nav/search-and-browse-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let service: MockDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CategoriesComponent, 
        HomeHeaderComponent, 
        SearchAndBrowseNavComponent 
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [ 
        { provide: DataService, useClass: MockDataService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new MockDataService();
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getCategories should return value from observable', () => {
    service.getCategories().subscribe(data => {
      expect(data).toEqual([
          { id: 1, name: 'Thriller' },
          { id: 2, name: 'Comedy' },
          { id: 3, name: 'Sci-fi' },
          { id: 4, name: 'Horror' }
        ]);
    });
  });

});
