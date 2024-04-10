import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDataComponent } from './profil-data.component';

describe('ProfilDataComponent', () => {
  let component: ProfilDataComponent;
  let fixture: ComponentFixture<ProfilDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilDataComponent]
    });
    fixture = TestBed.createComponent(ProfilDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
