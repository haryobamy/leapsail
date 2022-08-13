import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapsailComponent } from './leapsail.component';

describe('LeapsailComponent', () => {
  let component: LeapsailComponent;
  let fixture: ComponentFixture<LeapsailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeapsailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeapsailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
