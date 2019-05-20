import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DetailsFormComponent } from './details-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('DetailsFormComponent', () => {
  let component: DetailsFormComponent;
  let fixture: ComponentFixture<DetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFormComponent ],
      imports: [ 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create correct order object', () => {
  //   expect(component.singleOrderDetail).toBeUndefined();

  //   component.singleMovieDetail = {id: 1, name: 'Movie One', price: 100, imageUrl: 'https://bit.ly/2Wgcmpx', description: 'Really a good movie!'};
  //   component.streamingPlanForm.get('streamingOptions').value;

  //   component.placeOrders(component.singleMovieDetail.id);
  //   expect(component.singleOrderDetail).toBeDefined();
  //   expect(component.singleOrderDetail.status).toBe(1);
  // })
});
