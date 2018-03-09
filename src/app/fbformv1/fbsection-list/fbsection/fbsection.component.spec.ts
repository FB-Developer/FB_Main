import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbsectionComponent } from './fbsection.component';

describe('FbsectionComponent', () => {
  let component: FbsectionComponent;
  let fixture: ComponentFixture<FbsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
