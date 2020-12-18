import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResumenTramiteComponent } from './resumen-tramite.component';

describe('ResumenTramiteComponent', () => {
  let component: ResumenTramiteComponent;
  let fixture: ComponentFixture<ResumenTramiteComponent>;

  beforeEach(waitForAsync(() => {
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
