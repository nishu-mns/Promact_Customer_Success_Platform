import { Component, OnInit } from '@angular/core';
import { ApprovedTeam } from '../Models/ApprovedTeam';
import { ApprovedTeamService } from '../Service/approved-team.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApprovedTeamEditModalComponent } from '../approved-team-edit-modal/approved-team-edit-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approved-team',
  templateUrl: './approved-team.component.html',
  styleUrls: ['./approved-team.component.css']
})
export class ApprovedTeamComponent implements OnInit {
  projectId!: string;
  constructor(private approvedTeamService: ApprovedTeamService, private modalService: NgbModal, private router: ActivatedRoute) {
    this.router.params.subscribe(param=>{this.projectId=param['id'];
    console.log(this.projectId);
  })
}
approvedTeams: ApprovedTeam[] = [];
isNewRow: boolean = false;
newApprovedTeam: ApprovedTeam = {
  id: '',
  projectId: this.projectId,
  phase: 0,
  numberOfResources: 0,
  role: '',
  availabilityPercentage: 0,
  duration: 0
};

  ngOnInit(): void {
    this.getApprovedTeams();
  }

  getApprovedTeams(): void {
    this.approvedTeamService.getApprovedTeams()
      .subscribe(teams => this.approvedTeams = teams.items.filter((entry: ApprovedTeam) => entry.projectId === this.projectId));
  }

  addNewRow(): void {
    this.isNewRow = true;
  }

  saveNewRow(): void {
    this.approvedTeamService.createApprovedTeam({...this.newApprovedTeam,projectId:this.projectId})
      .subscribe(createdTeam => {
        this.approvedTeams.push(createdTeam);
        this.isNewRow = false;
        this.newApprovedTeam = {
          id: '',
          projectId: this.projectId,
          phase: 0,
          numberOfResources: 0,
          role: '',
          availabilityPercentage: 0,
          duration: 0
        };
      }, error => {
        console.error('Error creating new approved team:', error);
      });
  }

  saveChanges(): void {
    // Logic for saving changes
  }

  deleteApprovedTeam(team: ApprovedTeam): void {
    if (confirm('Are you sure you want to delete this approved team?')) {
      this.approvedTeamService.deleteApprovedTeam(team.id)
        .subscribe(() => {
          this.approvedTeams = this.approvedTeams.filter(t => t.id !== team.id);
        }, error => {
          console.error('Error deleting approved team:', error);
        });
    }
  }

  openEditModal(team: ApprovedTeam) {
    const modalRef = this.modalService.open(ApprovedTeamEditModalComponent, { centered: true });
    modalRef.componentInstance.approvedTeam = { ...team };
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedTeam: ApprovedTeam) => {
      const index = this.approvedTeams.findIndex(t => t.id === updatedTeam.id);
      if (index !== -1) {
        this.approvedTeams[index] = updatedTeam;
      }
    });
  }
}
