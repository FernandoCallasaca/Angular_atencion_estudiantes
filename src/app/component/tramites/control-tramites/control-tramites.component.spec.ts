import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ControlTramitesComponent } from './control-tramites.component';

describe('ControlTramitesComponent', () => {
  let component: ControlTramitesComponent;
  let fixture: ComponentFixture<ControlTramitesComponent>;

  beforeEach(waitForAsync(() => {
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
