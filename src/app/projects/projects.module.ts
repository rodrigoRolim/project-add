import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectMasterComponent } from './project-master/project-master.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectService } from './shared/project.service';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    ProjectMasterComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ProjectsRoutingModule
  ],
  providers: [ProjectService],
  exports: [
    ProjectComponent,
    ProjectListComponent,
    ProjectMasterComponent,
    ProjectsComponent
  ]
})
export class ProjectsModule { }
