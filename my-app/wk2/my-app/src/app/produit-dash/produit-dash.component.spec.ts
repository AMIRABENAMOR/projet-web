import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDashComponent } from './produit-dash.component';

describe('ProduitDashComponent', () => {
  let component: ProduitDashComponent;
  let fixture: ComponentFixture<ProduitDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
