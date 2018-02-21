import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreComponent } from './core.component';
import { MaterialModule } from '../util/material.module';


@NgModule({
  declarations: [
    NavComponent, 
    CoreComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    
  ],
  exports: [
    NavComponent,
    CoreComponent
  ]
})
export class CoreModule { }
