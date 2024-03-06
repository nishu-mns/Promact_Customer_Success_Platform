import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseMilestoneEditModalComponent } from './phase-milestone-edit-modal.component';

describe('PhaseMilestoneEditModalComponent', () => {
  let component: PhaseMilestoneEditModalComponent;
  let fixture: ComponentFixture<PhaseMilestoneEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhaseMilestoneEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhaseMilestoneEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
