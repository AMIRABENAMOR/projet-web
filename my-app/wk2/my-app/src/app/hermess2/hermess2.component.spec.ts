import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hermess2Component } from './hermess2.component';

describe('Hermess2Component', () => {
  let component: Hermess2Component;
  let fixture: ComponentFixture<Hermess2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hermess2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hermess2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
