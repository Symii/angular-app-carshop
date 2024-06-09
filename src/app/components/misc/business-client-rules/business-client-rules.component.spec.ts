import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessClientRulesComponent } from './business-client-rules.component';

describe('BusinessClientRulesComponent', () => {
  let component: BusinessClientRulesComponent;
  let fixture: ComponentFixture<BusinessClientRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessClientRulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessClientRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
