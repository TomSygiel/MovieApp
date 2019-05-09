import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  streamingPlan = new FormGroup({
    streamingOptions: new FormControl('')
  });

  
  onSubmit() {
    console.log(this.streamingPlan.value);
  }

}
