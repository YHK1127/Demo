import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebateCode } from './rebate-code';

describe('RebateCode', () => {
  let component: RebateCode;
  let fixture: ComponentFixture<RebateCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebateCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RebateCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
