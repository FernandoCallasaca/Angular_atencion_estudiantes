import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfirmarComponent } from './confirmar.component';

describe('ConfirmarComponent', () => {
  let component: ConfirmarComponent;
  let fixture: ComponentFixture<ConfirmarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
