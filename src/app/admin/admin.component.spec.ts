import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchAndBrowseNavComponent } from '../search-and-browse-nav/search-and-browse-nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MockDataService } from '../services/mock-data.service';
import { DataService } from '../services/data.service';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let service: MockDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AdminComponent, 
        SearchAndBrowseNavComponent
      ],
      imports: [ 
        HttpClientModule, 
        FormsModule,
        ReactiveFormsModule 
      ],
      providers: [ 
        { provide: DataService, useClass: MockDataService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new MockDataService();
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('removeOrder should remove order from order summary', () => {
    service.deleteOrder().subscribe(data => {
      expect(data).toEqual([{
        id:601, 
        companyId: 10, 
        created: "2019-05-20T14:45:00", 
        createdBy: "tom@mail.com", 
        paymentMethod: null,
        totalPrice: 200, 
        status: 1, 
        orderRows: [{id: 1030, productId: 1, amount:1, orderId:601}]
      }]);
    });
  });

});

