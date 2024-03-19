import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/Project';
import { ProjectService } from '../Service/project.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent implements OnInit {
  projects: Project[] = [];
  projectIds: string[] = [];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getallProjects();
  }

  getallProjects(): void {
    this.projectService.getAllProjects().subscribe(
      (data: any) => {
        console.log('Projects:', data);
        this.projects = data.items.map((project: any) => ({
          id: project.id,
          name: project.name,
          description: project.description,
          startedOn: project.startedOn,
          status: project.status,
          projectManager: project.projectManager,
          members: project.members
        }));
        this.projectIds = data.items.map((project: any) => project.id);
      },
      (error) => {
        console.error('Error loading projects:', error);
      }
    );
  }

  editProject(id: string): void {
    this.projectService.getProjectById(id).subscribe(
      (project: Project) => { },
      (error) => {
        console.error('Error fetching project details:', error);
      }
    );
  }

  deleteProject(id: string): void {
    this.projectService.deleteProject(id).subscribe(
      () => {
        console.log('Project deleted successfully');
        this.getallProjects();
      },
      (error) => {
        console.error('Error deleting project:', error); 
      }
    );
  }
}
