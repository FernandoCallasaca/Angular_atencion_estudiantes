import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteeditarComponent } from './estudianteeditar.component';

describe('EstudianteeditarComponent', () => {
  let component: EstudianteeditarComponent;
  let fixture: ComponentFixture<EstudianteeditarComponent>;

  beforeEach(async(() => {
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
