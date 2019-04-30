import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {

  constructor() { }
}
