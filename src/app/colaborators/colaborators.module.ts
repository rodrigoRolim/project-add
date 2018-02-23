import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboratorComponent } from './colaborator/colaborator.component';
import { ColaboratorMasterComponent } from './colaborator-master/colaborator-master.component';
import { ColaboratorListComponent } from './colaborator-list/colaborator-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ColaboratorsRoutingModule } from './colaborators-routing.module';
import { MaterialModule } from '../util/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ColaboratorsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
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
