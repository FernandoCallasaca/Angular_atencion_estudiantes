import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EstudianteeditarComponent } from './estudianteeditar.component';

describe('EstudianteeditarComponent', () => {
  let component: EstudianteeditarComponent;
  let fixture: ComponentFixture<EstudianteeditarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteeditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
