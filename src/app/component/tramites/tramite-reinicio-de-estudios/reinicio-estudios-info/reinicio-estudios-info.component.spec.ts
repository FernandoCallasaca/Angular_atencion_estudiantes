import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReinicioEstudiosInfoComponent } from './reinicio-estudios-info.component';

describe('ReinicioEstudiosInfoComponent', () => {
  let component: ReinicioEstudiosInfoComponent;
  let fixture: ComponentFixture<ReinicioEstudiosInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinicioEstudiosInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinicioEstudiosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
