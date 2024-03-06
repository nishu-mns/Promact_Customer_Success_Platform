import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { ProjectBudgetComponent } from './project-budget/project-budget.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path: '', component:TablesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
