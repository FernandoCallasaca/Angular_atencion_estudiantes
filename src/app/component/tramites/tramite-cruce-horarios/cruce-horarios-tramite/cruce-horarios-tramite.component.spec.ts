import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CruceHorariosTramiteComponent } from './cruce-horarios-tramite.component';

describe('CruceHorariosTramiteComponent', () => {
  let component: CruceHorariosTramiteComponent;
  let fixture: ComponentFixture<CruceHorariosTramiteComponent>;

  beforeEach(waitForAsync(() => {
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
