import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectBudgetComponent } from './project-budget/project-budget.component';
import { TablesComponent } from './tables/tables.component';
import { MainAreaComponent } from './Home/main-area/main-area.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuditHistoryComponent } from './audit-history/audit-history.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';

const routes: Routes = [
  {path: '',component: WelcomePageComponent},
  {path: 'tables',component: TablesComponent},
  {path: 'allprojects',component: AllProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
