import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroketteComponent } from './crokette.component';

describe('CroketteComponent', () => {
  let component: CroketteComponent;
  let fixture: ComponentFixture<CroketteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroketteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CroketteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
