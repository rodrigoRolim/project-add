import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectMasterComponent } from './project-master/project-master.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

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
  exports:[
    ProjectComponent, 
    ProjectListComponent, 
    ProjectMasterComponent,
    ProjectsComponent 
  ]
})
export class ProjectsModule { }
