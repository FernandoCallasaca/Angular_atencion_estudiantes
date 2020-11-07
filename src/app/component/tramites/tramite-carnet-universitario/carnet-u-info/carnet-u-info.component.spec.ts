import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetUInfoComponent } from './carnet-u-info.component';

describe('CarnetUInfoComponent', () => {
  let component: CarnetUInfoComponent;
  let fixture: ComponentFixture<CarnetUInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnetUInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetUInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
