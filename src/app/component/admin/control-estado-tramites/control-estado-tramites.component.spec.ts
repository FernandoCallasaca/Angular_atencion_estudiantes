import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ControlEstadoTramitesComponent } from './control-estado-tramites.component';

describe('ControlEstadoTramitesComponent', () => {
  let component: ControlEstadoTramitesComponent;
  let fixture: ComponentFixture<ControlEstadoTramitesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlEstadoTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlEstadoTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
