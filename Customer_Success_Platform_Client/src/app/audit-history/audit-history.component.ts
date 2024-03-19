import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AuditHistory } from '../Models/AuditHistory';
import { AuditHistoryService } from '../Service/audit-history.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuditHistoryEditModalComponent } from '../audit-history-edit-modal/audit-history-edit-modal.component';
import jsPDF from 'jspdf';
// import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { ProjectService } from '../Service/project.service';
import { Project } from '../Models/Project';
import { Stakeholder } from '../Models/StakeHolder';
import { StakeHolderService } from '../Service/stake-holder.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-audit-history',
  templateUrl: './audit-history.component.html',
  styleUrls: ['./audit-history.component.css']
})
export class AuditHistoryComponent implements OnInit {
  projectId!: string;
  constructor(private auditHistoryService: AuditHistoryService, private projectService: ProjectService,private stakeHolderService: StakeHolderService,
    private modalService: NgbModal,private router: ActivatedRoute) {
      this.router.params.subscribe(param=>{this.projectId=param['id'];
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
    // this.loadAuditHistory();
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



  loadAuditHistory(): void {
    this.auditHistoryService.getAuditHistories().subscribe(
      (data: any) => {
        this.auditHistories = data.items.filter((entry: AuditHistory) => entry.projectId === this.projectId);
        
      },
      error => {
        console.error('Error loading audit history:', error);
      }
    );
  }

  getAuditHistories(): void {
    this.auditHistoryService.getAuditHistories()
      .subscribe(histories => this.auditHistories = histories.items.filter((entry: AuditHistory) => entry.projectId === this.projectId));
  }

  addNewRow(): void {
    this.isNewRow = true;
  }

  saveNewRow(): void {
    console.log("Save new row",this.newAuditHistory);
    console.log(this.projectId);
    
    this.auditHistoryService.createAuditHistory({...this.newAuditHistory,projectId:this.projectId})
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




}
