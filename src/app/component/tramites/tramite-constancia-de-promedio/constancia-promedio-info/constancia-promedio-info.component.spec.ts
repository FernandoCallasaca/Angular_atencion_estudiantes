import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstanciaPromedioInfoComponent } from './constancia-promedio-info.component';

describe('ConstanciaPromedioInfoComponent', () => {
  let component: ConstanciaPromedioInfoComponent;
  let fixture: ComponentFixture<ConstanciaPromedioInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstanciaPromedioInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstanciaPromedioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
