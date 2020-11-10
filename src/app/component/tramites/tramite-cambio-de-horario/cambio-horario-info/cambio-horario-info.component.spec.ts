import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioHorarioInfoComponent } from './cambio-horario-info.component';

describe('CambioHorarioInfoComponent', () => {
  let component: CambioHorarioInfoComponent;
  let fixture: ComponentFixture<CambioHorarioInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioHorarioInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioHorarioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
