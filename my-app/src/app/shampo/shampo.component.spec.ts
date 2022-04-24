import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampoComponent } from './shampo.component';

describe('ShampoComponent', () => {
  let component: ShampoComponent;
  let fixture: ComponentFixture<ShampoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShampoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
