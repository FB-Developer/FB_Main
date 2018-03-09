import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbfacultyComponent } from './fbfaculty.component';

describe('FbfacultyComponent', () => {
  let component: FbfacultyComponent;
  let fixture: ComponentFixture<FbfacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbfacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
