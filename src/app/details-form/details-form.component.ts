import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IMovieProducts, IOrderObject } from '../interfaces/IMovieProducts';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})


export class DetailsFormComponent implements OnInit {

  @Input() singleMovieDetail: IMovieProducts;

  @Input() singleOrderDetail: IOrderObject;
  

  streamingPlanOptions = [
    { id: -1, value: 'Select plan...'},
    { id: 0, value: '3-day access 100 SEK'},
    { id: 1, value: '7-day access 200 SEK'},
    { id: 2, value: '30-day access 300 SEK'}
  ]

  constructor(private service: DataService, private fb: FormBuilder) { }

  ngOnInit() {

  }

  streamingPlanForm = this.fb.group({
    streamingOptions: [-1, Validators.min(0)]
  });

  placeOrders() {
    
    console.log(this.streamingPlanForm.get('streamingOptions').value);

    this.singleOrderDetail = {
      id: 0, 
      companyId: 10, 
      created:'', 
      createdBy: '', 
      paymentMethod: null,
      totalPrice :0,
      status: this.streamingPlanForm.get('streamingOptions').value,
      orderRows: [{ ProductId: this.singleMovieDetail.id, Amount: 1}]
    };
    
    this.service.saveOrder(this.singleOrderDetail);

    // Skicka användaren till nästa steg
  }

}
