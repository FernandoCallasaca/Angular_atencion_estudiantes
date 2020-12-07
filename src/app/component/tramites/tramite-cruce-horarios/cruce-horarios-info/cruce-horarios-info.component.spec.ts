import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruceHorariosInfoComponent } from './cruce-horarios-info.component';

describe('CruceHorariosInfoComponent', () => {
  let component: CruceHorariosInfoComponent;
  let fixture: ComponentFixture<CruceHorariosInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruceHorariosInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruceHorariosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
