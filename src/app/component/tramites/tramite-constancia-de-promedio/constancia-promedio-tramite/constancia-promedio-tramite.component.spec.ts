import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstanciaPromedioTramiteComponent } from './constancia-promedio-tramite.component';

describe('ConstanciaPromedioTramiteComponent', () => {
  let component: ConstanciaPromedioTramiteComponent;
  let fixture: ComponentFixture<ConstanciaPromedioTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstanciaPromedioTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstanciaPromedioTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
