import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboratorComponent } from './colaborator/colaborator.component';
import { ColaboratorMasterComponent } from './colaborator-master/colaborator-master.component';
import { ColaboratorListComponent } from './colaborator-list/colaborator-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ColaboratorsRoutingModule } from './colaborators-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ColaboratorsRoutingModule 
  ],
  exports: [
    ColaboratorComponent,
    ColaboratorMasterComponent,
    ColaboratorListComponent,
    ColaboratorsRoutingModule 
  ],
  declarations: [
    ColaboratorComponent, 
    ColaboratorMasterComponent, 
    ColaboratorListComponent
  ]
})
export class ColaboratorsModule { }
