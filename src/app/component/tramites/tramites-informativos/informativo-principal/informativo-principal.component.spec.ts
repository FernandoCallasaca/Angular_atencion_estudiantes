import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InformativoPrincipalComponent } from './informativo-principal.component';

describe('InformativoPrincipalComponent', () => {
  let component: InformativoPrincipalComponent;
  let fixture: ComponentFixture<InformativoPrincipalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InformativoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
