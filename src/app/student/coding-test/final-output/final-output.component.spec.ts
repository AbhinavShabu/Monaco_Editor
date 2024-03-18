import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalOutputComponent } from './final-output.component';

describe('FinalOutputComponent', () => {
  let component: FinalOutputComponent;
  let fixture: ComponentFixture<FinalOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinalOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
