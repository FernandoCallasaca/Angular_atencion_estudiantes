import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CursosParalelosInfoComponent } from './cursos-paralelos-info.component';

describe('CursosParalelosInfoComponent', () => {
  let component: CursosParalelosInfoComponent;
  let fixture: ComponentFixture<CursosParalelosInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosParalelosInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosParalelosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
