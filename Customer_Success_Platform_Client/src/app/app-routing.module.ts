import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectBudgetComponent } from './project-budget/project-budget.component';
import { TablesComponent } from './tables/tables.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuditHistoryComponent } from './audit-history/audit-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectDeatilsComponent } from './project-deatils/project-deatils.component';

const routes: Routes = [
  {path: '',component: WelcomePageComponent},
  {path: 'tables',component: TablesComponent},
  {path: 'all-projects',component: WelcomePageComponent},
  {path: 'new-project',component: NewProjectComponent},
  {path: 'project-details/:id',component: ProjectDeatilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
