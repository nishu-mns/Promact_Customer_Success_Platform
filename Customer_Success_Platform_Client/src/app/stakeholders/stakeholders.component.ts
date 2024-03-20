import { Component, OnInit } from '@angular/core';
import { Stakeholder } from '../Models/StakeHolder';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { StakeHolderService } from '../Service/stake-holder.service';
import { StakeholderEditModalComponent } from '../stake-holder-edit-modal/stake-holder-edit-modal.component';

@Component({
  selector: 'app-stakeholders',
  templateUrl: './stakeholders.component.html',
  styleUrls: ['./stakeholders.component.css']
})
export class StakeholdersComponent implements OnInit {
  projectId!: string;
  constructor(private stakeholderService: StakeHolderService, private modalService: NgbModal, private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.projectId = param['id'];
      console.log(this.projectId);

    })
  }

  stakeholders: Stakeholder[] = [];
  newStakeholder: Stakeholder = {
    id:'',
    projectId: this.projectId,
    title: '',
    name: '',
    contact: ''
  };
  isNewStakeholder: boolean = false;

  ngOnInit(): void {
    this.getStakeholders();
  }

  getStakeholders(): void {
    this.stakeholderService.getAllStakeholders()
      .subscribe(stakeholders => this.stakeholders = stakeholders.items.filter((entry: Stakeholder) => entry.projectId === this.projectId));
  }

  addNewStakeholder(): void {
    this.isNewStakeholder = true;
  }

  saveNewStakeholder(): void {
    this.stakeholderService.createStakeholder({...this.newStakeholder,projectId:this.projectId})
      .subscribe(createdStakeholder => {
        this.stakeholders.push(createdStakeholder);
        this.isNewStakeholder = false;
        this.newStakeholder = {
          id:'',
          projectId: this.projectId,
          title: '',
          name: '',
          contact: ''
        };
      }, error => {
        console.error('Error creating new stakeholder:', error);
      });
  }

  saveChanges(): void {
    // Implement saving changes logic here
  }

  deleteStakeholder(stakeholder: Stakeholder): void {
    if (confirm('Are you sure you want to delete this stakeholder?')) {
      this.stakeholderService.deleteStakeholder(stakeholder.id)
        .subscribe(() => {
          this.stakeholders = this.stakeholders.filter(s => s.id !== stakeholder.id);
        }, error => {
          console.error('Error deleting stakeholder:', error);
        });
    }
  }

  openEditModal(stakeholder: Stakeholder) {
    const modalRef = this.modalService.open(StakeholderEditModalComponent, { centered: true });
    modalRef.componentInstance.stakeholder = { ...stakeholder };
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedStakeholder: Stakeholder) => {
      const index = this.stakeholders.findIndex(s => s.id === updatedStakeholder.id);
      if (index !== -1) {
        this.stakeholders[index] = updatedStakeholder;
      }
    });
  }
}
