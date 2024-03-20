import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApprovedTeam } from '../Models/ApprovedTeam';
import { ProjectBudget } from '../Models/ProjectBudget';
import { ClientFeedback } from '../Models/ClientFeedback';
import { ProjectResource } from '../Models/ProjectResource';
import { ProjectUpdates } from '../Models/ProjectUpdate';
import { MeetingMinute } from '../Models/MeetingMinute';
import { AuditHistory } from '../Models/AuditHistory';
import { VersionHistory } from '../Models/VersionHistory';
import { Scope } from '../Models/Scope';
import { EscalationMatrix } from '../Models/EscalationMatrix';
import { PhaseMilestone } from '../Models/PhaseMilestone';
import { RiskProfiling } from '../Models/RiskProfiling';
import { Sprint } from '../Models/Sprint';
import { Project } from '../Models/Project';
import { Stakeholder } from '../Models/StakeHolder';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../Service/project.service';
import { AuditHistoryService } from '../Service/audit-history.service';
import { ProjectBudgetService } from '../Service/project-budget.service';
import { ApprovedTeamService } from '../Service/approved-team.service';
import { ClientFeedbackService } from '../Service/client-feedback.service';
import { ProjectResourceService } from '../Service/project-resource.service';
import { VersionHistoryService } from '../Service/version-history.service';
import { MeetingMinuteService } from '../Service/meeting-minute.service';
import { SprintService } from '../Service/sprint.service';
import { RiskProfilingService } from '../Service/risk-profiling.service';
import { StakeHolderService } from '../Service/stake-holder.service';
import { ScopeService } from '../Service/scope.service';
import {EscalationMatrixService} from '../Service/escalation-matrix.service'
import { ProjectUpdateService } from '../Service/project-update.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-project-deatils',
  templateUrl: './project-deatils.component.html',
  styleUrl: './project-deatils.component.css'
})
export class ProjectDeatilsComponent {
  @ViewChild('content', { static: false }) content!: ElementRef;
  projectId!: string;
  approvedTeams: ApprovedTeam[] = [];
  clientFeedbacks: ClientFeedback[] = [];
  projectBudgets: ProjectBudget[] = [];
  resources: ProjectResource[] = [];
  projectUpdates: ProjectUpdates[] = [];
  moms: MeetingMinute[] = [];
  auditHistory: AuditHistory[] = [];
  version: VersionHistory[] = [];
  scope: Scope[] = [];
  escalation: EscalationMatrix[] = [];
  stakeHolder: Stakeholder[] = [];
  risk: RiskProfiling[] = [];
  phases: PhaseMilestone[] = [];
  sprint: Sprint[] = [];
  projects: Project[] = [];

  constructor(
    private approvedTeamService: ApprovedTeamService,
    private clientFeedbackService: ClientFeedbackService,
    private projectBudgetService: ProjectBudgetService,
    private projectResourceService: ProjectResourceService,
    private projectUpdateService: ProjectUpdateService,
    private meetingServics: MeetingMinuteService,
    private auditService: AuditHistoryService,
    private stakeHolderService: StakeHolderService,
    private riskProfileService: RiskProfilingService,
    private versionHistoryServcie: VersionHistoryService,
    private scopeService: ScopeService,
    private EscalationMatrixService: EscalationMatrixService,
    private sprintService: SprintService,
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }

  downloadAsPdf(){
    const pdf = new jsPDF('p', 'pt', 'a2');

    pdf.html(this.content.nativeElement, {
      callback: (pdf) => {
        pdf.save('ProjectDetails.pdf');
      },
    });
  }

}
