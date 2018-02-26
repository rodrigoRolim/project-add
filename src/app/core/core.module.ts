import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { CoreComponent } from './core.component';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '../util/material.module';
import { CoreRoutingModule } from './/core-routing.module';

@NgModule({
  declarations: [
    NavComponent,
    CoreComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    CoreRoutingModule,
  ],
  exports: [
    NavComponent,
    CoreComponent
  ]
})
export class CoreModule { }
