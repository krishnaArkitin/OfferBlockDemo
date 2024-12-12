import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteDashboardComponent } from './institute-dashboard.component';

describe('InstituteDashboardComponent', () => {
  let component: InstituteDashboardComponent;
  let fixture: ComponentFixture<InstituteDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstituteDashboardComponent]
    });
    fixture = TestBed.createComponent(InstituteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
