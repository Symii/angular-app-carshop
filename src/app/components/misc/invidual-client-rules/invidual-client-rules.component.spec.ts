import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvidualClientRulesComponent } from './invidual-client-rules.component';

describe('InvidualClientRulesComponent', () => {
  let component: InvidualClientRulesComponent;
  let fixture: ComponentFixture<InvidualClientRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvidualClientRulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvidualClientRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
