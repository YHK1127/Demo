import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUser } from './service-user';

describe('ServiceUser', () => {
  let component: ServiceUser;
  let fixture: ComponentFixture<ServiceUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
