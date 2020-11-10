import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosTramitesInfoComponent } from './otros-tramites-info.component';

describe('OtrosTramitesInfoComponent', () => {
  let component: OtrosTramitesInfoComponent;
  let fixture: ComponentFixture<OtrosTramitesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrosTramitesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosTramitesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
