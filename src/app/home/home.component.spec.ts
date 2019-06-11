import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { HomeHeaderComponent } from '../home-header/home-header.component';
import { HomeNavigationComponent } from '../home-navigation/home-navigation.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, HomeHeaderComponent, HomeNavigationComponent ],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .overrideComponent(HomeComponent, { set: { providers: [{ provide:
      DataService, useClass: MockDataService }]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getData should return a mock data value', () => {
    expect(component.movies.length).toBeGreaterThan(0);
    expect(component.movies.length).toBe(3);
  });
});
