import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReinicioEstudiosTramiteComponent } from './reinicio-estudios-tramite.component';

describe('ReinicioEstudiosTramiteComponent', () => {
  let component: ReinicioEstudiosTramiteComponent;
  let fixture: ComponentFixture<ReinicioEstudiosTramiteComponent>;

  beforeEach(waitForAsync(() => {
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
