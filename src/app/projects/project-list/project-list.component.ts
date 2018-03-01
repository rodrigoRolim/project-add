import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectsInit();
    console.log(this.projects);
  }
  projectsInit(): void {
    this.projectService.getProjects().subscribe(ps => {
      this.projects = ps;
      console.log(ps);
    });
  }
}
