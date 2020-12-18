import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SecretariaEditarComponent } from './secretaria-editar.component';

describe('SecretariaEditarComponent', () => {
  let component: SecretariaEditarComponent;
  let fixture: ComponentFixture<SecretariaEditarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretariaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretariaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
