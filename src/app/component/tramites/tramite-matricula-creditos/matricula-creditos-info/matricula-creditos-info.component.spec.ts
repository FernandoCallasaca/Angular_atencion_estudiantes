import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatriculaCreditosInfoComponent } from './matricula-creditos-info.component';

describe('MatriculaCreditosInfoComponent', () => {
  let component: MatriculaCreditosInfoComponent;
  let fixture: ComponentFixture<MatriculaCreditosInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaCreditosInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaCreditosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
