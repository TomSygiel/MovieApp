import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNavComponent } from './details-nav.component';

describe('DetailsNavComponent', () => {
  let component: DetailsNavComponent;
  let fixture: ComponentFixture<DetailsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
