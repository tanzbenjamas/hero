import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckradioComponent } from './checkradio.component';

describe('CheckradioComponent', () => {
  let component: CheckradioComponent;
  let fixture: ComponentFixture<CheckradioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckradioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
