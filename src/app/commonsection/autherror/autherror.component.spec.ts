import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherrorComponent } from './autherror.component';

describe('AutherrorComponent', () => {
  let component: AutherrorComponent;
  let fixture: ComponentFixture<AutherrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutherrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutherrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
