import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RprtsComponent } from './rprts.component';

describe('RprtsComponent', () => {
  let component: RprtsComponent;
  let fixture: ComponentFixture<RprtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RprtsComponent]
    });
    fixture = TestBed.createComponent(RprtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
