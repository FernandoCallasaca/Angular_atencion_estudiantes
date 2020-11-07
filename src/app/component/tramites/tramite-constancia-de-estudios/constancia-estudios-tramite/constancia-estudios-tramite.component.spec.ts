import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstanciaEstudiosTramiteComponent } from './constancia-estudios-tramite.component';

describe('ConstanciaEstudiosTramiteComponent', () => {
  let component: ConstanciaEstudiosTramiteComponent;
  let fixture: ComponentFixture<ConstanciaEstudiosTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstanciaEstudiosTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstanciaEstudiosTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
