import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategorySliderComponent } from './product-category-slider.component';

describe('ProductCategorySliderComponent', () => {
  let component: ProductCategorySliderComponent;
  let fixture: ComponentFixture<ProductCategorySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategorySliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategorySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
