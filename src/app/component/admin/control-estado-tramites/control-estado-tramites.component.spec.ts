import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEstadoTramitesComponent } from './control-estado-tramites.component';

describe('ControlEstadoTramitesComponent', () => {
  let component: ControlEstadoTramitesComponent;
  let fixture: ComponentFixture<ControlEstadoTramitesComponent>;

  beforeEach(async(() => {
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
