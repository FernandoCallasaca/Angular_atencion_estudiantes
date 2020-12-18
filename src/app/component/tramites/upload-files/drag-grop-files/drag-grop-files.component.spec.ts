import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DragGropFilesComponent } from './drag-grop-files.component';

describe('DragGropFilesComponent', () => {
  let component: DragGropFilesComponent;
  let fixture: ComponentFixture<DragGropFilesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DragGropFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragGropFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
