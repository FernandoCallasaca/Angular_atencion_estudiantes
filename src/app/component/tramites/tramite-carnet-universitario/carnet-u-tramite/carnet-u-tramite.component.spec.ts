import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetUTramiteComponent } from './carnet-u-tramite.component';

describe('CarnetUTramiteComponent', () => {
  let component: CarnetUTramiteComponent;
  let fixture: ComponentFixture<CarnetUTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnetUTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetUTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
