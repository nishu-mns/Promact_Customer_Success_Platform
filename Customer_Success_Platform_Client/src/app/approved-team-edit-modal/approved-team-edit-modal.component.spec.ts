import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedTeamEditModalComponent } from './approved-team-edit-modal.component';

describe('ApprovedTeamEditModalComponent', () => {
  let component: ApprovedTeamEditModalComponent;
  let fixture: ComponentFixture<ApprovedTeamEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovedTeamEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovedTeamEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
