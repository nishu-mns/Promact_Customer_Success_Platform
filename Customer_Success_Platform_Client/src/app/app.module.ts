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
import { FormsModule } from '@angular/forms';
import { TablesComponent } from './tables/tables.component';
import { EscalationMatrixComponent } from './escalation-matrix/escalation-matrix.component';
import { AuditHistoryEditModalComponent } from './audit-history-edit-modal/audit-history-edit-modal.component';
import { VersionHistoryEditModalComponent } from './version-history-edit-modal/version-history-edit-modal.component';
import { ProjectBudgetEditModalComponent } from './project-budget-edit-modal/project-budget-edit-modal.component';
import { PhaseMilestoneEditModalComponent } from './phase-milestone-edit-modal/phase-milestone-edit-modal.component';
import { HeaderComponent } from './Home/header/header.component';
import { SidebarComponent } from './Home/sidebar/sidebar.component';
import { MainAreaComponent } from './Home/main-area/main-area.component';
import { CardComponent } from './Home/card/card.component';
import { AuthModule } from '@auth0/auth0-angular';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuthService } from './Service/auth.service';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProjectAddModalComponent } from './project-add-modal/project-add-modal.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    HeaderComponent,
    SidebarComponent,
    MainAreaComponent,
    CardComponent,
    WelcomePageComponent,
    ProjectModalComponent,
    DashboardComponent,
    AllProjectsComponent,
    ProjectAddModalComponent
  ],
  imports: [
    BrowserModule,
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
