import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignUpComponent } from './user-sign-up.component';

describe('UserSignUpComponent', () => {
  let component: UserSignUpComponent;
  let fixture: ComponentFixture<UserSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSignUpComponent]
    });
    fixture = TestBed.createComponent(UserSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
