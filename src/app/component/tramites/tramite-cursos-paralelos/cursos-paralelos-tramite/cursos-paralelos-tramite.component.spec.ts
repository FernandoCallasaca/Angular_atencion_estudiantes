import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosParalelosTramiteComponent } from './cursos-paralelos-tramite.component';

describe('CursosParalelosTramiteComponent', () => {
  let component: CursosParalelosTramiteComponent;
  let fixture: ComponentFixture<CursosParalelosTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosParalelosTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosParalelosTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
