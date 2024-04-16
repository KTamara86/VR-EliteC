import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDataComponent } from './orders-data.component';

describe('OrdersDataComponent', () => {
  let component: OrdersDataComponent;
  let fixture: ComponentFixture<OrdersDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersDataComponent]
    });
    fixture = TestBed.createComponent(OrdersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
