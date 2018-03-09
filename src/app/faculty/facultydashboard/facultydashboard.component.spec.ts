import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultydashboardComponent } from './facultydashboard.component';

describe('FacultydashboardComponent', () => {
  let component: FacultydashboardComponent;
  let fixture: ComponentFixture<FacultydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
