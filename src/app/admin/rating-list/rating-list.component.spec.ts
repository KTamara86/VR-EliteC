import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingListComponent } from './rating-list.component';

describe('RatingListComponent', () => {
  let component: RatingListComponent;
  let fixture: ComponentFixture<RatingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingListComponent]
    });
    fixture = TestBed.createComponent(RatingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
