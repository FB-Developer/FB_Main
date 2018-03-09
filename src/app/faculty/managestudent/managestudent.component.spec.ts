import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestudentComponent } from './managestudent.component';

describe('ManagestudentComponent', () => {
  let component: ManagestudentComponent;
  let fixture: ComponentFixture<ManagestudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagestudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
