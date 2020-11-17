import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenTramiteComponent } from './resumen-tramite.component';

describe('ResumenTramiteComponent', () => {
  let component: ResumenTramiteComponent;
  let fixture: ComponentFixture<ResumenTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
