import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondeaccess2Component } from './secondeaccess2.component';

describe('Secondeaccess2Component', () => {
  let component: Secondeaccess2Component;
  let fixture: ComponentFixture<Secondeaccess2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondeaccess2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Secondeaccess2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
