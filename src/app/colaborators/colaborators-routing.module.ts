import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ColaboratorComponent } from './colaborator/colaborator.component';
import { ColaboratorMasterComponent } from './colaborator-master/colaborator-master.component';
import { ColaboratorListComponent } from './colaborator-list/colaborator-list.component';
import { AuthGuardService } from '../shared/auth-guard.service';

const routes: Routes = [
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
  exports: [ RouterModule ],
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})

export class ColaboratorsRoutingModule { }
