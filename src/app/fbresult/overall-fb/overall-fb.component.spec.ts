import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallFbComponent } from './overall-fb.component';

describe('OverallFbComponent', () => {
  let component: OverallFbComponent;
  let fixture: ComponentFixture<OverallFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
