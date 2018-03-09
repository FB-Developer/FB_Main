import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbrootComponent } from './fbroot.component';

describe('FbrootComponent', () => {
  let component: FbrootComponent;
  let fixture: ComponentFixture<FbrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
