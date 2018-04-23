import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClientModalComponent } from './search-client-modal.component';

describe('SearchClientModalComponent', () => {
  let component: SearchClientModalComponent;
  let fixture: ComponentFixture<SearchClientModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchClientModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
