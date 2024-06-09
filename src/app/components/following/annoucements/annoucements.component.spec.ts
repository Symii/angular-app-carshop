import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementsComponent } from './annoucements.component';

describe('AnnoucementsComponent', () => {
  let component: AnnoucementsComponent;
  let fixture: ComponentFixture<AnnoucementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnoucementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnoucementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
