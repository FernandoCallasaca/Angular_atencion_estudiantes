import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsereditComponent } from './useredit.component';

describe('UsereditComponent', () => {
  let component: UsereditComponent;
  let fixture: ComponentFixture<UsereditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
