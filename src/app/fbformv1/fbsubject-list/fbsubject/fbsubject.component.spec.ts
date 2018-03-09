import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbsubjectComponent } from './fbsubject.component';

describe('FbsubjectComponent', () => {
  let component: FbsubjectComponent;
  let fixture: ComponentFixture<FbsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
