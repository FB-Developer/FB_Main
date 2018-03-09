import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbfacultyListComponent } from './fbfaculty-list.component';

describe('FbfacultyListComponent', () => {
  let component: FbfacultyListComponent;
  let fixture: ComponentFixture<FbfacultyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbfacultyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbfacultyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
