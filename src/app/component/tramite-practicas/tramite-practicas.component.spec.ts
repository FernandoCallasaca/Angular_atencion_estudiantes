import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitePracticasComponent } from './tramite-practicas.component';

describe('TramitePracticasComponent', () => {
  let component: TramitePracticasComponent;
  let fixture: ComponentFixture<TramitePracticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramitePracticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TramitePracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
