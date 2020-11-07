import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstanciaEgresadoInfoComponent } from './constancia-egresado-info.component';

describe('ConstanciaEgresadoInfoComponent', () => {
  let component: ConstanciaEgresadoInfoComponent;
  let fixture: ComponentFixture<ConstanciaEgresadoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstanciaEgresadoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstanciaEgresadoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
