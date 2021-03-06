import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaInfoComponent } from './matricula-info.component';

describe('MatriculaInfoComponent', () => {
  let component: MatriculaInfoComponent;
  let fixture: ComponentFixture<MatriculaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
