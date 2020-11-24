import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerocardMobileComponent } from './herocard-mobile.component';

describe('HerocardMobileComponent', () => {
  let component: HerocardMobileComponent;
  let fixture: ComponentFixture<HerocardMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerocardMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerocardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
