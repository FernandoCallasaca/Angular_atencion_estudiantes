import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstanciaEgresadoTramiteComponent } from './constancia-egresado-tramite.component';

describe('ConstanciaEgresadoTramiteComponent', () => {
  let component: ConstanciaEgresadoTramiteComponent;
  let fixture: ComponentFixture<ConstanciaEgresadoTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstanciaEgresadoTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstanciaEgresadoTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
