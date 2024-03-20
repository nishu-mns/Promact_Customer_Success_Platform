import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AuditHistory } from '../Models/AuditHistory';
import { AuditHistoryService } from '../Service/audit-history.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuditHistoryEditModalComponent } from '../audit-history-edit-modal/audit-history-edit-modal.component';
import { ProjectService } from '../Service/project.service';
import { Project } from '../Models/Project';
import { Stakeholder } from '../Models/StakeHolder';
import { StakeHolderService } from '../Service/stake-holder.service';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../Models/Email';
import { EmailServiceService } from '../Service/email-service.service';

@Component({
  selector: 'app-audit-history',
  templateUrl: './audit-history.component.html',
  styleUrls: ['./audit-history.component.css']
})
export class AuditHistoryComponent implements OnInit {
  projectId!: string;
  constructor(private auditHistoryService: AuditHistoryService, private emailService: EmailServiceService, private projectService: ProjectService, private stakeHolderService: StakeHolderService,
    private modalService: NgbModal, private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.projectId = param['id'];
      console.log(this.projectId);

    })
  }
  projects: Project[] = [];
  stakeholders: Stakeholder[] = [];
  auditHistories: AuditHistory[] = [];
  isNewRow: boolean = false;
  newAuditHistory: AuditHistory = {
    id: '',
    projectId: this.projectId,
    dateOfAudit: new Date(),
    reviewedBy: '',
    status: '',
    reviewedSection: '',
    commentQueries: '',
    actionItem: ''
  };

  ngOnInit(): void {
    this.getAuditHistories();
    this.loadProjects();
    this.loadStakeholders();
  }

  pName!: string;
  loadProjects(): void {
    this.projectService.getAllProjects().subscribe(
      (data: any) => {
        this.projects = data.items.map((project: any) => ({
          id: project.id,
          projectName: project.name
        }));

        this.projects.forEach((project: any) => {
          if (project.id === this.projectId) {
            this.pName = project.projectName;
          }
        });
      },
      error => {
        console.error('Error loading projects:', error);
      }
    );
  }

  loadStakeholders(): void {
    this.stakeHolderService.getAllStakeholders().subscribe(
      (data: any) => {
        // Filter stakeholders based on the project ID
        this.stakeholders = data.items.filter((stakeholder: Stakeholder) => stakeholder.projectId === this.projectId);

        console.log('Stakeholders:', this.stakeholders);
      },
      (error) => {
        console.error('Error loading stakeholders:', error);
      }
    );
  }

  getAuditHistories(): void {
    this.auditHistoryService.getAuditHistories()
      .subscribe(histories => { this.auditHistories = histories.items.filter((entry: AuditHistory) => entry.projectId === this.projectId) },
        error => {
          console.error('Error loading audit history:', error);
        });
  }

  addNewRow(): void {
    this.isNewRow = true;
  }

  saveNewRow(): void {
    // console.log("Save new row", this.newAuditHistory);
    // console.log(this.projectId);

    this.auditHistoryService.createAuditHistory({ ...this.newAuditHistory, projectId: this.projectId })
      .subscribe(createdHistory => {
        console.log('New audit history created successfully:', createdHistory);
        this.auditHistories.push(createdHistory);
        this.isNewRow = false;
        this.newAuditHistory = {
          id: '',
          projectId: this.projectId,
          dateOfAudit: new Date(),
          reviewedBy: '',
          status: '',
          reviewedSection: '',
          commentQueries: '',
          actionItem: ''
        };
        this.sendEmail(createdHistory);
      }, error => {
        console.error('Error creating new audit history:', error);
      });
  }

  saveChanges(): void {

  }

  deleteAuditHistory(history: AuditHistory): void {
    if (confirm('Are you sure you want to delete this audit history?')) {
      this.auditHistoryService.deleteAuditHistory(history.id)
        .subscribe(() => {
          this.auditHistories = this.auditHistories.filter(h => h.id !== history.id);
        }, error => {
          console.error('Error deleting audit history:', error);
        });
    }
  }

  openEditModal(history: AuditHistory) {
    const modalRef = this.modalService.open(AuditHistoryEditModalComponent, { centered: true });
    modalRef.componentInstance.auditHistory = { ...history };
    modalRef.componentInstance.saveChangesEvent.subscribe((updatedHistory: AuditHistory) => {
      const index = this.auditHistories.findIndex(h => h.id === updatedHistory.id);
      if (index !== -1) {
        this.auditHistories[index] = updatedHistory;
      }
    });
  }

  sendEmail(data: any): void {
    console.log("Entering emal...");
    
    const subject = 'Audit history is created';
    // Iterate over each stakeholder and send individual notifications
    this.stakeholders.forEach((stakeholder: Stakeholder) => {
      const stakeholderName = stakeholder.name;

      const contact = stakeholder.contact;
      console.log(stakeholderName,contact);
      
      if (!this.isValidEmailAddress(contact)) {
        console.error(`Invalid email address for stakeholder ${stakeholderName}: ${contact}`);
        return;
      }

      const body = `
      <div class="email-body">
        <div class="email-header">
          <h2>Hello ${stakeholderName},</h2>
    
          <p>Please note that the Audit History has been created. Here is the summary:</p>
    
          <table class="email-table">
            <tr>
              <td>Project Name:</td>
              <td>${this.pName}</td>
            </tr>
            <tr>
              <td>Date of Audit:</td>
              <td>${data.dateOfAudit}</td>
            </tr>
            <tr>
              <td>Reviewed By:</td>
              <td>${data.reviewedBy}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>${data.status}</td>
            </tr>
            <tr>
              <td>Reviewed Section:</td>
              <td>${data.reviewedSection}</td>
            </tr>
            <tr>
              <td>Comment / Queries:</td>
              <td>${data.commentQueries}</td>
            </tr>
            <tr>
            <td>Actions:</td>
            <td>${data.actionItem}</td>
          </tr> 
          </table>
          
          <p class="email-footer">For more details, visit our official website: <a href="https://promactinfo.com/">Promact Infotech Pvt Ltd</a></p>
          
          <p class="email-footer">Thanks and Regards,<br>Promact Infotech Pvt Ltd</p>
        </div>
      </div>
    `;
      const emails: Email[] = [
        {
          subject: subject,
          body: body,
          recipients: [stakeholder.contact]
        },
      ];

      this.emailService.sendEmails(emails).subscribe(
        () => {
          alert("Email hase been sent");
          console.log(`Notification email sent successfully to ${stakeholderName}`);
        },
        (error) => {
          console.error(`Error sending notification email to ${stakeholderName}:`, error);
        }
      );
    });
  }


  isValidEmailAddress(email: string): boolean {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

}
