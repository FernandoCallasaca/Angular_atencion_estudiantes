import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTramitesComponent } from './control-tramites.component';

describe('ControlTramitesComponent', () => {
  let component: ControlTramitesComponent;
  let fixture: ComponentFixture<ControlTramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
