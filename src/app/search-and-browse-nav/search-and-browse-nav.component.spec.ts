import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndBrowseNavComponent } from './search-and-browse-nav.component';

describe('SearchAndBrowseNavComponent', () => {
  let component: SearchAndBrowseNavComponent;
  let fixture: ComponentFixture<SearchAndBrowseNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAndBrowseNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndBrowseNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
