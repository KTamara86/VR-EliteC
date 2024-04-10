import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketPointInfoComponent } from './packet-point-info.component';

describe('PacketPointInfoComponent', () => {
  let component: PacketPointInfoComponent;
  let fixture: ComponentFixture<PacketPointInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacketPointInfoComponent]
    });
    fixture = TestBed.createComponent(PacketPointInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
