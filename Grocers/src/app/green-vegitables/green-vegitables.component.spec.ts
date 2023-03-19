import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenVegitablesComponent } from './green-vegitables.component';

describe('GreenVegitablesComponent', () => {
  let component: GreenVegitablesComponent;
  let fixture: ComponentFixture<GreenVegitablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenVegitablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenVegitablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
