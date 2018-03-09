import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbsubjectListComponent } from './fbsubject-list.component';

describe('FbsubjectListComponent', () => {
  let component: FbsubjectListComponent;
  let fixture: ComponentFixture<FbsubjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbsubjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbsubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
