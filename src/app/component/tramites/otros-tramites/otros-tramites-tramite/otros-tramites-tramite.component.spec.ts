import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OtrosTramitesTramiteComponent } from './otros-tramites-tramite.component';

describe('OtrosTramitesTramiteComponent', () => {
  let component: OtrosTramitesTramiteComponent;
  let fixture: ComponentFixture<OtrosTramitesTramiteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrosTramitesTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosTramitesTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
