import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariaEditarComponent } from './secretaria-editar.component';

describe('SecretariaEditarComponent', () => {
  let component: SecretariaEditarComponent;
  let fixture: ComponentFixture<SecretariaEditarComponent>;

  beforeEach(async(() => {
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
