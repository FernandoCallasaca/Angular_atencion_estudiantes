import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlReportesTramitesComponent } from './control-reportes-tramites.component';

describe('ControlReportesTramitesComponent', () => {
  let component: ControlReportesTramitesComponent;
  let fixture: ComponentFixture<ControlReportesTramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlReportesTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlReportesTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
