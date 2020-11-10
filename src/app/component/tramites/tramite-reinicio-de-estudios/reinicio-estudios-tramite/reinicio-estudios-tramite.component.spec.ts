import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinicioEstudiosTramiteComponent } from './reinicio-estudios-tramite.component';

describe('ReinicioEstudiosTramiteComponent', () => {
  let component: ReinicioEstudiosTramiteComponent;
  let fixture: ComponentFixture<ReinicioEstudiosTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinicioEstudiosTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinicioEstudiosTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
