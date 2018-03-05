import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ProjectMasterTeamComponent } from './project-master-team/project-master-team.component';
import { MaterialModule } from '../../util/material.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [ProjectMasterTeamComponent],
  exports: [ProjectMasterTeamComponent]
})
export class ProjectMasterModule { }
