import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneScreenComponent } from './phone-screen.component';

describe('PhoneScreenComponent', () => {
  let component: PhoneScreenComponent;
  let fixture: ComponentFixture<PhoneScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
