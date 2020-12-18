import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResetearclaveComponent } from './resetarclave.component';

describe('ResetarclaveComponent', () => {
  let component: ResetearclaveComponent;
  let fixture: ComponentFixture<ResetearclaveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetearclaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetearclaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
