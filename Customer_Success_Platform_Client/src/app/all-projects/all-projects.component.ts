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
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
