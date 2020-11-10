import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioHorarioTramiteComponent } from './cambio-horario-tramite.component';

describe('CambioHorarioTramiteComponent', () => {
  let component: CambioHorarioTramiteComponent;
  let fixture: ComponentFixture<CambioHorarioTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioHorarioTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioHorarioTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
