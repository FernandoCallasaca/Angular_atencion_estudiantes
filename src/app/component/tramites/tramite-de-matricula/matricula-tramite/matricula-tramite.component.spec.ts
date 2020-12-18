import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatriculaTramiteComponent } from './matricula-tramite.component';

describe('MatriculaTramiteComponent', () => {
  let component: MatriculaTramiteComponent;
  let fixture: ComponentFixture<MatriculaTramiteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
