import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService from ngx-toastr

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() handleContinue1: EventEmitter<void> = new EventEmitter<void>();
  @Input() step: number = 1;
  // step = 1;
  projectName = '';
  projectDesc = '';
  projectScope = '';
  projectStack = '';
  clientName = '';
  clientEmail = '';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  handleContinue(): void {
    if (this.step === 2) {
      this.handleClient();
    } else {
      this.handleProjectDetails();
      this.step++;
    }
  }

  handleProjectDetails(): void {
    // Post request for project details
    this.http.post('/api/v1/projects', {
      project_name: this.projectName,
      project_desc: this.projectDesc,
      project_scope: this.projectScope,
      project_stack: this.projectStack,
      project_status: 'In progress',
      project_manager: 'Dipa Majumdar'
    }).subscribe(
      (projectResponse: any) => {
        this.toastr.success('Project created successfully');
        console.log('Project created:', projectResponse);
      },
      (error: any) => {
        this.toastr.error('Error creating project');
        console.error('Error:', error);
      }
    );
  }

  handleClient(): void {
    // Post request for client details
    this.http.post('/api/v1/clients', {
      name: this.clientName,
      email: this.clientEmail
    }).subscribe(
      (clientResponse: any) => {
        this.toastr.success('Client created successfully');
        console.log('Client created:', clientResponse);
        // Close modal after successful creation
      },
      (error: any) => {
        this.toastr.error('Error creating client');
        console.error('Error:', error);
      }
    );
  }

  handleCloseModal(): void {
    this.closeModal.emit();
  }

  handleContinueAction(): void {
    this.handleContinue1.emit();
  }
}
