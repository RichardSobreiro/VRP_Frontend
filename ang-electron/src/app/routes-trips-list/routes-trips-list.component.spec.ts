import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesTripsListComponent } from './routes-trips-list.component';

describe('RoutesTripsListComponent', () => {
  let component: RoutesTripsListComponent;
  let fixture: ComponentFixture<RoutesTripsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesTripsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesTripsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
