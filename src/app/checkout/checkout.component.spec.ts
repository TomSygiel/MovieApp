import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout.component';
import { DetailsNavComponent } from '../details-nav/details-nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { SearchAndBrowseNavComponent } from '../search-and-browse-nav/search-and-browse-nav.component';
import { MockDataService } from '../services/mock-data.service';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let service: MockDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CheckoutComponent, 
        DetailsNavComponent,
        ModalComponent,
        SearchAndBrowseNavComponent
      ],
      imports: [ 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new MockDataService();
    sessionStorage.setItem('orders', JSON.stringify(new MockDataService().orders[0]));

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should use custom template to create the order", () => {
  let service = new MockDataService();
  let orderFromSession = JSON.parse(sessionStorage.getItem("orders"));
    service.getData().subscribe(data => {
      component.singleMovieDetail = data[0];

        component.savedOrder = { 
          id: 0,
          companyId: 10, 
          created: "", 
          createdBy: "tom@mail.com", 
          paymentMethod: null,
          totalPrice : 200,
          status: 1,
          orderRows: []
        };
        
        component.confirmOrder();
        
        expect(orderFromSession.id).toBeGreaterThan(0);
    })

  });

});
