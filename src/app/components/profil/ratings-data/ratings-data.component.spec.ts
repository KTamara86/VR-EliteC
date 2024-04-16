import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsDataComponent } from './ratings-data.component';

describe('RatingsDataComponent', () => {
  let component: RatingsDataComponent;
  let fixture: ComponentFixture<RatingsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingsDataComponent]
    });
    fixture = TestBed.createComponent(RatingsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
