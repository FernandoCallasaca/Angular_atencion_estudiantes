import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FiltroFechaComponent } from './filtro-fecha.component';

describe('FiltroFechaComponent', () => {
  let component: FiltroFechaComponent;
  let fixture: ComponentFixture<FiltroFechaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
