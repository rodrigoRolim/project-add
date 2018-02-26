import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ColaboratorService } from './shared/colaborator.service';
import { ColaboratorComponent } from './colaborator/colaborator.component';
import { ColaboratorMasterComponent } from './colaborator-master/colaborator-master.component';
import { ColaboratorListComponent } from './colaborator-list/colaborator-list.component';
import { ColaboratorsRoutingModule } from './colaborators-routing.module';
import { MaterialModule } from '../util/material.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ColaboratorsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ColaboratorComponent,
    ColaboratorMasterComponent,
    ColaboratorListComponent
  ],
  providers: [ColaboratorService],
  declarations: [
    ColaboratorComponent,
    ColaboratorMasterComponent,
    ColaboratorListComponent
  ]
})

export class ColaboratorsModule { }
