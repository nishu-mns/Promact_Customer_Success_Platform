import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs'; 
import {HttpClientModule, HttpClient} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
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
    ProjectBudgetEditModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
