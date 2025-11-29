import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionCode } from './promotion-code';

describe('PromotionCode', () => {
  let component: PromotionCode;
  let fixture: ComponentFixture<PromotionCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
