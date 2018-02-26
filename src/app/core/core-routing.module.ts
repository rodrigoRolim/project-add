import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from '../projects/project-list/project-list.component';
import { ColaboratorListComponent } from '../colaborators/colaborator-list/colaborator-list.component';
import { AuthGuardService } from '../shared/auth-guard.service';
import { ColaboratorComponent } from '../colaborators/colaborator/colaborator.component';
import { ColaboratorMasterComponent } from '../colaborators/colaborator-master/colaborator-master.component';
import { ProjectComponent } from '../projects/project/project.component';
import { ProjectMasterComponent } from '../projects/project-master/project-master.component';

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
        path: 'edit/:id',
        component: ProjectMasterComponent,
        canActivateChild: [AuthGuardService]
      }
    ]
  },
  {
    path: 'colaborators',
    children: [
      {
        path: '',
        canActivate: [AuthGuardService],
        component: ColaboratorListComponent
      },
      {
        path: 'detail',
        component: ColaboratorComponent,
        canActivateChild: [AuthGuardService]
      },
      {
        path: 'add',
        component: ColaboratorMasterComponent,
        canActivateChild: [AuthGuardService]
      },
      {
        path: 'edit',
        component: ColaboratorMasterComponent,
        canActivateChild: [AuthGuardService]
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CoreRoutingModule { }
