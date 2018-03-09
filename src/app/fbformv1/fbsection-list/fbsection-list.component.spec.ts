import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbsectionListComponent } from './fbsection-list.component';

describe('FbsectionListComponent', () => {
  let component: FbsectionListComponent;
  let fixture: ComponentFixture<FbsectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbsectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbsectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
