import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosEquivalentesTramiteComponent } from './cursos-equivalentes-tramite.component';

describe('CursosEquivalentesTramiteComponent', () => {
  let component: CursosEquivalentesTramiteComponent;
  let fixture: ComponentFixture<CursosEquivalentesTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosEquivalentesTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosEquivalentesTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
