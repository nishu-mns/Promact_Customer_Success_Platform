import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectBudgetComponent } from './project-budget/project-budget.component';
import { PhaseMilestoneComponent } from './phase-milestone/phase-milestone.component';
import { SprintComponent } from './sprint/sprint.component';
import { AuditHistoryComponent } from './audit-history/audit-history.component';
import { VersionHistoryComponent } from './version-history/version-history.component';
import { RiskProfilingComponent } from './risk-profiling/risk-profiling.component';
import { StakeholdersComponent } from './stakeholders/stakeholders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from './tables/tables.component';
import { EscalationMatrixComponent } from './escalation-matrix/escalation-matrix.component';
import { AuditHistoryEditModalComponent } from './audit-history-edit-modal/audit-history-edit-modal.component';
import { VersionHistoryEditModalComponent } from './version-history-edit-modal/version-history-edit-modal.component';
import { ProjectBudgetEditModalComponent } from './project-budget-edit-modal/project-budget-edit-modal.component';
import { PhaseMilestoneEditModalComponent } from './phase-milestone-edit-modal/phase-milestone-edit-modal.component';
import { SidebarComponent } from './Home/sidebar/sidebar.component';
import { AuthModule } from '@auth0/auth0-angular';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuthService } from './Service/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewProjectComponent } from './new-project/new-project.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectDeatilsComponent } from './project-deatils/project-deatils.component';
import { MeetingMinuteComponent } from './meeting-minute/meeting-minute.component';
import { ClientFeedbackComponent } from './client-feedback/client-feedback.component';
import { ApprovedTeamComponent } from './approved-team/approved-team.component';
import { DetailedTimelineComponent } from './detailed-timeline/detailed-timeline.component';
import { ProjectResourcesComponent } from './project-resources/project-resources.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ScopeComponent } from './scope/scope.component';
import { ApprovedTeamEditModalComponent } from './approved-team-edit-modal/approved-team-edit-modal.component';
import { ClientFeedbackEditModalComponent } from './client-feedback-edit-modal/client-feedback-edit-modal.component';
import { DetailedTimelineEditModalComponent } from './detailed-timeline-edit-modal/detailed-timeline-edit-modal.component';
import { StakeholderEditModalComponent } from './stake-holder-edit-modal/stake-holder-edit-modal.component';
import { ScopeEditModalComponent } from './scope-edit-modal/scope-edit-modal.component';
import { EscalationMatrixEditModalComponent } from './escalation-edit-modal/escalation-edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectBudgetComponent,
    PhaseMilestoneComponent,
    SprintComponent,
    AuditHistoryComponent,
    VersionHistoryComponent,
    RiskProfilingComponent,
    StakeholdersComponent,
    TablesComponent,
    EscalationMatrixComponent,
    AuditHistoryEditModalComponent,
    VersionHistoryEditModalComponent,
    ProjectBudgetEditModalComponent,
    PhaseMilestoneEditModalComponent,
    SidebarComponent,
    WelcomePageComponent,
    DashboardComponent,
    AllProjectsComponent,
    NewProjectComponent,
    NavbarComponent,
    ProjectDeatilsComponent,
    MeetingMinuteComponent,
    ClientFeedbackComponent,
    ApprovedTeamComponent,
    DetailedTimelineComponent,
    ProjectResourcesComponent,
    ProjectUpdateComponent,
    ScopeComponent,
    ApprovedTeamEditModalComponent,
    ClientFeedbackEditModalComponent,
    DetailedTimelineEditModalComponent,
    StakeholderEditModalComponent,
    ScopeEditModalComponent,
    EscalationMatrixEditModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule
    ToastrModule.forRoot(), // Add ToastrModule and call forRoot() method
    AuthModule.forRoot({
      domain: 'dev-bjnapztl5m3ywebf.us.auth0.com',
      clientId: 'yCFyr52lV2CZW47BRrR31X2AKhrhSPFd',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
