import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BengaliComponent } from './bengali.component';

describe('BengaliComponent', () => {
  let component: BengaliComponent;
  let fixture: ComponentFixture<BengaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BengaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BengaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
