import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../Models/Project';
import { ProjectService } from '../Service/project.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-add-modal',
  templateUrl: './project-add-modal.component.html',
  styleUrl: './project-add-modal.component.css'
})
export class ProjectAddModalComponent implements OnInit {
  project: Project = {
    id: '',
    name: '',
    description: '',
    startedOn: new Date(),
    status: '',
    projectManager: '',
    members: 0
  };
  clientName: string = '';
  clientEmail: string = '';
  projectManagers: string[] = [];

  constructor(public activeModal: NgbActiveModal, private projectService: ProjectService) { }

  ngOnInit(): void {
    // Fetch project managers
    // this.projectService.getProjectManagers().subscribe(managers => {
    //   this.projectManagers = managers;
    // });
  }

  closeModal() {
    this.activeModal.close('Modal closed');
  }

  submitProject() {
    // Add project to the database
    const projectWithClient = { ...this.project, clientName: this.clientName, clientEmail: this.clientEmail };
    this.projectService.addProject(projectWithClient).subscribe(() => {
      // Close modal and refresh projects table
      this.closeModal();
      // this.projectService.refreshProjects();
    });
  }
}