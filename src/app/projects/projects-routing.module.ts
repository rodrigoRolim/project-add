import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectMasterComponent } from './project-master/project-master.component';
const routes = [
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: 'projects/detail',
    component: ProjectComponent
  },
  {
    path: 'projects/add',
    component: ProjectMasterComponent
  },
  {
    path: 'projects/edit',
    component: ProjectMasterComponent
  }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ProjectsRoutingModule { }
