import { Component, OnInit } from '@angular/core';
import { PhaseMilestone } from '../Models/PhaseMilestone';
import { PhaseMilestoneService } from '../Service/phaseMilestone.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PhaseMilestoneEditModalComponent } from '../phase-milestone-edit-modal/phase-milestone-edit-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phase-milestone',
  templateUrl: './phase-milestone.component.html',
  styleUrls: ['./phase-milestone.component.css']
})
export class PhaseMilestoneComponent implements OnInit {
  projectId!: string;

  constructor(private phaseMilestoneService: PhaseMilestoneService, private modalService: NgbModal, private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.projectId = param['id'];
      console.log(this.projectId);

    })
  }


  phaseMilestones: PhaseMilestone[] = [];
  newMilestone: PhaseMilestone = {
    id: '',
    projectId: this.projectId,
    title: '',
    startDate: new Date(),
    endDate: new Date(),
    approvalDate: new Date(),
    status: 0,
    revisedCompletionDate: new Date(),
    comments: ''
  };
  isNewMilestone: boolean = false;

  ngOnInit(): void {
    // Fetch phase milestones when component initializes
    this.getPhaseMilestones();
  }

  getPhaseMilestones(): void {
    // Assuming PhaseMilestoneService has a method to fetch milestones
    this.phaseMilestoneService.getPhaseMilestones()
      .subscribe(milestones => this.phaseMilestones = milestones.items.filter(milestone => milestone.projectId === this.projectId));
  }

  addNewMilestone(): void {
    // Display the form for adding a new milestone
    this.isNewMilestone = true;
  }

  saveNewMilestone(): void {
    // Save the new milestone
    this.phaseMilestoneService.createPhaseMilestone({...this.newMilestone, projectId: this.projectId})
      .subscribe(createdMilestone => {
        this.phaseMilestones.push(createdMilestone);
        this.isNewMilestone = false;
        this.newMilestone = {
          id: '',
          projectId: this.projectId,
          title: '',
          startDate: new Date(),
          endDate: new Date(),
          approvalDate: new Date(),
          status: 0,
          revisedCompletionDate: new Date(),
          comments: ''
        };
      }, error => {
        console.error('Error creating new phase milestone:', error);
      });
  }

  deletePhaseMilestone(milestone: PhaseMilestone): void {
    // Delete the specified milestone
    if (confirm('Are you sure you want to delete this milestone?')) {
      this.phaseMilestoneService.deletePhaseMilestone(milestone.id)
        .subscribe(() => {
          this.phaseMilestones = this.phaseMilestones.filter(m => m.id !== milestone.id);
        }, error => {
          console.error('Error deleting phase milestone:', error);
        });
    }
  }

  openEditModal(milestone: PhaseMilestone) {
    // Open a modal for editing the milestone
    const modalRef = this.modalService.open(PhaseMilestoneEditModalComponent, { centered: true });
    modalRef.componentInstance.phaseMilestone = { ...milestone };
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedMilestone: PhaseMilestone) => {
      const index = this.phaseMilestones.findIndex(m => m.id === updatedMilestone.id);
      if (index !== -1) {
        this.phaseMilestones[index] = updatedMilestone;
      }
    });
  }
}
