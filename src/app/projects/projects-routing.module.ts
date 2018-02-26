import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../shared/auth-guard.service';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectMasterComponent } from './project-master/project-master.component';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      {
        path: '',
        canActivate: [AuthGuardService],
        component: ProjectListComponent
      },
      {
        path: 'detail',
        component: ProjectComponent,
        canActivateChild: [AuthGuardService]
      },
      {
        path: 'add',
        component: ProjectMasterComponent,
        canActivateChild: [AuthGuardService]
      },
      {
        path: 'edit',
        component: ProjectMasterComponent,
        canActivateChild: [AuthGuardService]
      }
    ]
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
