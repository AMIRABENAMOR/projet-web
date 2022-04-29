import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrosseComponent } from './brosse.component';

describe('BrosseComponent', () => {
  let component: BrosseComponent;
  let fixture: ComponentFixture<BrosseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrosseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrosseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
