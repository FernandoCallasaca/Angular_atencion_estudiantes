import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrientacionSesionesComponent } from './orientacion-sesiones.component';

describe('OrientacionSesionesComponent', () => {
  let component: OrientacionSesionesComponent;
  let fixture: ComponentFixture<OrientacionSesionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientacionSesionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientacionSesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
