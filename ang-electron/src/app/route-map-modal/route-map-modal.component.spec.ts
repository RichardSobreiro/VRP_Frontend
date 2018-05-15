import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMapModalComponent } from './route-map-modal.component';

describe('RouteMapModalComponent', () => {
  let component: RouteMapModalComponent;
  let fixture: ComponentFixture<RouteMapModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteMapModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteMapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
