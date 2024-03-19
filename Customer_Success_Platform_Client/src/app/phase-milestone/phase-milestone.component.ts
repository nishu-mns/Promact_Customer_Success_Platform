import { Component, OnInit } from '@angular/core';
import { PhaseMilestone } from '../Models/PhaseMilestone';
import { PhaseMilestoneService } from '../Service/phaseMilestone.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PhaseMilestoneEditModalComponent } from '../phase-milestone-edit-modal/phase-milestone-edit-modal.component';

@Component({
  selector: 'app-phase-milestone',
  templateUrl: './phase-milestone.component.html',
  styleUrls: ['./phase-milestone.component.css']
})
export class PhaseMilestoneComponent implements OnInit {

  phaseMilestones: PhaseMilestone[] = [];
  isNewRow: boolean = false;
  newPhaseMilestone: PhaseMilestone = {
    id: "",
    projectId: "",
    title: "",
    startDate: new Date(),
    endDate: new Date(),
    approvalDate: new Date(),
    status: 0,
    revisedCompletionDate: new Date(),
    comments: ""
  };

  constructor(private phaseMilestoneService: PhaseMilestoneService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getPhaseMilestones();
  }

  getPhaseMilestones() {
    this.phaseMilestoneService.getPhaseMilestones().subscribe(res => {
      this.phaseMilestones = res.items;
    });
    console.log(this.phaseMilestones);
  }

  saveChanges(): void {

  }

  deletePhaseMilestone(phaseMilestone: PhaseMilestone) {
    if (confirm('Are you sure you want to delete this phase milestone?')) {
      this.phaseMilestoneService.deletePhaseMilestone(phaseMilestone.id).subscribe(() => {
        this.phaseMilestones = this.phaseMilestones.filter(pm => pm.id !== phaseMilestone.id);
      });
    }
  }

  addNewRow() {
    this.isNewRow = true;
  }

  saveNewRow() {
    this.phaseMilestoneService.createPhaseMilestone(this.newPhaseMilestone).subscribe(
      createdMilestone => {
        this.phaseMilestones.push(createdMilestone);
        this.isNewRow = false;
        this.newPhaseMilestone = {
          id: "",
          projectId: "",
          title: "",
          startDate: new Date(),
          endDate: new Date(),
          approvalDate: new Date(),
          status: 0,
          revisedCompletionDate: new Date(),
          comments: ""
        };
      },
      error => {
        console.error('Error creating new phase milestone:', error);
      }
    );
  }

  openEditModal(phaseMilestone: PhaseMilestone) {
    const modalRef = this.modalService.open(PhaseMilestoneEditModalComponent, { centered: true });
    modalRef.componentInstance.phaseMilestone = { ...phaseMilestone };
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedMilestone: PhaseMilestone) => {
      const index = this.phaseMilestones.findIndex(h => h.id === updatedMilestone.id);
      if (index !== -1) {
        this.phaseMilestones[index] = updatedMilestone;
      }
    });
  }

}
