import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstanciaEstudiosInfoComponent } from './constancia-estudios-info.component';

describe('ConstanciaEstudiosInfoComponent', () => {
  let component: ConstanciaEstudiosInfoComponent;
  let fixture: ComponentFixture<ConstanciaEstudiosInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstanciaEstudiosInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstanciaEstudiosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
