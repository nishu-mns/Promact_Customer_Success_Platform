import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBudgetEditModalComponent } from './project-budget-edit-modal.component';

describe('ProjectBudgetEditModalComponent', () => {
  let component: ProjectBudgetEditModalComponent;
  let fixture: ComponentFixture<ProjectBudgetEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectBudgetEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectBudgetEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
