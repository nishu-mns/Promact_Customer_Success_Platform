import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ProjectService } from '../Service/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(public auth: AuthService,private projectService: ProjectService) { }

  projectNames: string[] = [];
  totalProjects: number = 0;
  inProgress: number = 0;
  completed: number = 0;
  onHold: number = 0;
  ngOnInit(): void {
    this.calculateTotalProjectsCount();
  }

  calculateTotalProjectsCount() {
    this.projectService.getAllProjects().subscribe(
      (data: any) => {
        this.projectNames = data.items.map((project: any) => project.projectName);
        this.totalProjects = this.projectNames.length;
      },
      (error) => {
        console.error('Error loading projects:', error);
      }
    );
  }
}
