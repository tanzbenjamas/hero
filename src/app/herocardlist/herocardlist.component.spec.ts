import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerocardlistComponent } from './herocardlist.component';

describe('HerocardlistComponent', () => {
  let component: HerocardlistComponent;
  let fixture: ComponentFixture<HerocardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerocardlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerocardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
