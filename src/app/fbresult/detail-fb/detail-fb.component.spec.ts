import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFbComponent } from './detail-fb.component';

describe('DetailFbComponent', () => {
  let component: DetailFbComponent;
  let fixture: ComponentFixture<DetailFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
