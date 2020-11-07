import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionTramiteComponent } from './informacion-tramite.component';

describe('InformacionTramiteComponent', () => {
  let component: InformacionTramiteComponent;
  let fixture: ComponentFixture<InformacionTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
