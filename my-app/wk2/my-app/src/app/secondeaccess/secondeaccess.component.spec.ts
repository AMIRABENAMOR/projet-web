import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondeaccessComponent } from './secondeaccess.component';

describe('SecondeaccessComponent', () => {
  let component: SecondeaccessComponent;
  let fixture: ComponentFixture<SecondeaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondeaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondeaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
