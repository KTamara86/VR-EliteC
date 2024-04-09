import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOpinionComponent } from './my-opinion.component';

describe('MyOpinionComponent', () => {
  let component: MyOpinionComponent;
  let fixture: ComponentFixture<MyOpinionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOpinionComponent]
    });
    fixture = TestBed.createComponent(MyOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
