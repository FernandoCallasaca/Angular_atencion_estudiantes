import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdministradorEditarComponent } from './administrador-editar.component';

describe('AdministradorEditarComponent', () => {
  let component: AdministradorEditarComponent;
  let fixture: ComponentFixture<AdministradorEditarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
