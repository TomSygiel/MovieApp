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

  it('should create correct order object', () => {
    expect(component.singleOrderDetail).toBeUndefined();

    component.singleMovieDetail = {
      id: 1, 
      name: 'Movie One', 
      price: 100, 
      imageUrl: 'https://bit.ly/2Wgcmpx',
      year: 2000,
      description: 'Really a good movie!',
      productCategory: []
    };
    
    let planValue = component.streamingPlanForm.get('streamingOptions').value;

    component.placeOrders();

    let orderFromSession = JSON.parse(sessionStorage.getItem("orders"));
    expect(orderFromSession).toBeDefined();
    expect(orderFromSession.status).toBe(planValue);
  });
});
