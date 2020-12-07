import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaCreditosTramiteComponent } from './matricula-creditos-tramite.component';

describe('MatriculaCreditosTramiteComponent', () => {
  let component: MatriculaCreditosTramiteComponent;
  let fixture: ComponentFixture<MatriculaCreditosTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaCreditosTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaCreditosTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
