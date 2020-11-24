import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheroacademiaComponent } from './myheroacademia.component';

describe('MyheroacademiaComponent', () => {
  let component: MyheroacademiaComponent;
  let fixture: ComponentFixture<MyheroacademiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyheroacademiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyheroacademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
