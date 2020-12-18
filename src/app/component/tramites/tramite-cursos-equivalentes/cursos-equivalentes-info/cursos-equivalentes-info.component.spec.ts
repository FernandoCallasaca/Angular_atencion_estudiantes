import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CursosEquivalentesInfoComponent } from './cursos-equivalentes-info.component';

describe('CursosEquivalentesInfoComponent', () => {
  let component: CursosEquivalentesInfoComponent;
  let fixture: ComponentFixture<CursosEquivalentesInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosEquivalentesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosEquivalentesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
