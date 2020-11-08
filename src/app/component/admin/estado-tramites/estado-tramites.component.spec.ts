import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoTramitesComponent } from './estado-tramites.component';

describe('EstadoTramitesComponent', () => {
  let component: EstadoTramitesComponent;
  let fixture: ComponentFixture<EstadoTramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
