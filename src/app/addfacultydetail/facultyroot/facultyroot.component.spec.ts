import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyrootComponent } from './facultyroot.component';

describe('FacultyrootComponent', () => {
  let component: FacultyrootComponent;
  let fixture: ComponentFixture<FacultyrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
