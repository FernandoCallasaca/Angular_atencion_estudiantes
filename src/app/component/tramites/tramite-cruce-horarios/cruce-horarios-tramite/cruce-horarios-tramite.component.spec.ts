import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruceHorariosTramiteComponent } from './cruce-horarios-tramite.component';

describe('CruceHorariosTramiteComponent', () => {
  let component: CruceHorariosTramiteComponent;
  let fixture: ComponentFixture<CruceHorariosTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruceHorariosTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruceHorariosTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
