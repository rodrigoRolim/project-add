import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ColaboratorComponent } from './colaborator/colaborator.component';
import { ColaboratorMasterComponent } from './colaborator-master/colaborator-master.component';
import { ColaboratorListComponent } from './colaborator-list/colaborator-list.component';
const routes = [
  {
    path: 'colaborators',
    component: ColaboratorListComponent
  },
  {
    path: 'colaborators/detail',
    component: ColaboratorComponent
  },
  {
    path: 'colaborators/add',
    component: ColaboratorMasterComponent
  },
  {
    path: 'colaborator/edit',
    component: ColaboratorMasterComponent
  }
]
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ColaboratorsRoutingModule { }