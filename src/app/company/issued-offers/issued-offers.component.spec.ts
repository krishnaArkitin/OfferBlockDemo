import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedOffersComponent } from './issued-offers.component';

describe('IssuedOffersComponent', () => {
  let component: IssuedOffersComponent;
  let fixture: ComponentFixture<IssuedOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssuedOffersComponent]
    });
    fixture = TestBed.createComponent(IssuedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
