import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultysubjectComponent } from './facultysubject.component';

describe('FacultysubjectComponent', () => {
  let component: FacultysubjectComponent;
  let fixture: ComponentFixture<FacultysubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultysubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultysubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
